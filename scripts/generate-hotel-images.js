import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const hotelsData = fs.readFileSync(path.join(process.cwd(), 'src/data/hotels.ts'), 'utf-8');
const hotelsMatch = hotelsData.match(/export const hotels: Hotel\[\] = (\[[\s\S]*?\]);/);
if (!hotelsMatch) {
  throw new Error('Could not parse hotels data');
}
const hotels = eval(hotelsMatch[1]);

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is not set');
  console.error('Please set it: export GEMINI_API_KEY="your-api-key"');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });

const outputDir = path.join(process.cwd(), 'public/images/hotels');

function sanitizeFilename(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function generateImage(prompt, filename) {
  try {
    console.log(`Generating image for: ${filename}`);
    console.log(`Prompt: ${prompt}`);

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    const response = result.response;
    const candidates = response.candidates;

    if (!candidates || candidates.length === 0) {
      throw new Error('No candidates returned');
    }

    const parts = candidates[0].content.parts;
    let imageData = null;

    for (const part of parts) {
      if (part.inlineData) {
        imageData = part.inlineData.data;
        break;
      }
    }

    if (!imageData) {
      throw new Error('No image data in response');
    }

    const buffer = Buffer.from(imageData, 'base64');
    const outputPath = path.join(outputDir, filename);
    fs.writeFileSync(outputPath, buffer);
    console.log(`Saved: ${outputPath}`);
    return `/images/hotels/${filename}`;

  } catch (error) {
    console.error(`Error generating image for ${filename}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Starting hotel image generation...\n');

  const updatedHotels = [];

  for (const hotel of hotels) {
    const prompt = `Professional hotel photography: ${hotel.name} in ${hotel.city}. ${hotel.description} ${hotel.amenities.join(', ')}. ${hotel.stars}-star luxury hotel. High quality, realistic, well-lit interior/exterior shot, architectural photography style.`;

    const filename = `${sanitizeFilename(hotel.name)}.jpg`;
    const imagePath = await generateImage(prompt, filename);

    updatedHotels.push({
      ...hotel,
      image: imagePath || hotel.image,
    });

    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  function formatHotel(hotel) {
    return `  {
    name: "${hotel.name}",
    city: "${hotel.city}",
    stars: ${hotel.stars},
    distanceFromHaram: "${hotel.distanceFromHaram}",
    amenities: [${hotel.amenities.map(a => `"${a}"`).join(', ')}],
    image: "${hotel.image}",
    description: "${hotel.description.replace(/"/g, '\\"')}",
  }`;
  }

  const outputContent = `export interface Hotel {
  name: string;
  city: "Makkah" | "Madinah";
  stars: number;
  distanceFromHaram: string;
  amenities: string[];
  image: string;
  description: string;
}

export const hotels: Hotel[] = [
${updatedHotels.map(formatHotel).join(',\n')}
];`;

  const hotelsDataPath = path.join(process.cwd(), 'src/data/hotels.ts');
  fs.writeFileSync(hotelsDataPath, outputContent);
  console.log('\nUpdated hotels.ts with new image paths');
}

main().catch(console.error);