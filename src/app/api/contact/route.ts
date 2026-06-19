import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, journeyType, packageName, duration, date, travelers, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone are required.' }, { status: 400 });
    }

    const htmlContent = `
      <h2>New Enquiry from GAZI TOURS AND TRAVELS</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Journey Category:</strong> ${journeyType || 'N/A'}</p>
      <p><strong>Package Name:</strong> ${packageName || 'N/A'}</p>
      <p><strong>Duration:</strong> ${duration || 'N/A'}</p>
      <p><strong>Preferred Date:</strong> ${date || 'N/A'}</p>
      <p><strong>Travelers:</strong> ${travelers || 'N/A'}</p>
      <br />
      <h3>Message:</h3>
      <p>${message || 'No additional message.'}</p>
    `;

    const data = await resend.emails.send({
      from: 'GAZI TOURS AND TRAVELS <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL as string],
      subject: `New Enquiry from ${name} - ${packageName || journeyType || 'General Enquiry'}`,
      html: htmlContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
