import urllib.request
import re
import sys
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

def download_image(query, filename):
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )
    
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        
        # Find all unsplash photo URLs
        matches = re.findall(r'https://images.unsplash.com/photo-[a-zA-Z0-9-]+[^"\'?&]*', html)
        if not matches:
            print(f"No images found for {query}")
            return
            
        # Get the first unique photo ID URL and construct high-res URL
        photo_url = matches[0] + "?q=80&w=1200&auto=format&fit=crop"
        print(f"Downloading {query} from {photo_url}")
        
        # Download
        urllib.request.urlretrieve(photo_url, filename)
        print(f"Saved to {filename}")
        
    except Exception as e:
        print(f"Error for {query}: {e}")

download_image("muslim-pilgrim-praying", "public/images/pilgrimage/about-pilgrim-new.jpg")
download_image("kaaba-mecca", "public/images/pilgrimage/excellence-kaaba.jpg")
download_image("makkah-haram", "public/images/pilgrimage/gallery-1.jpg")
download_image("madinah-mosque", "public/images/pilgrimage/gallery-2.jpg")
download_image("muslim-dua", "public/images/pilgrimage/gallery-3.jpg")
download_image("umrah", "public/images/pilgrimage/gallery-4.jpg")

