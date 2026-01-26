import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import TeamNotification from '../emails/TeamNotification';
import ContactUsAutoReply from '../emails/ContactUsAutoReply';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Render React Email templates
    const teamEmailHtml = await render(TeamNotification({ name, email, message }));
    const userEmailHtml = await render(ContactUsAutoReply({ name, message }));

    // 1. Send notification to your team
    const teamNotification = await resend.emails.send({
      from: 'OhYeahSaaS Contact <info@ohyeahsaas.com>',
      replyTo: email,
      to: 'info@ohyeahsaas.com',
      subject: `New Contact Form Submission from ${name}`,
      html: teamEmailHtml,
    });

    // 2. Send auto-reply to the user
    const userReply = await resend.emails.send({
      from: 'OhYeahSaaS <info@ohyeahsaas.com>',
      to: email,
      subject: 'Thank you for contacting OhYeahSaaS',
      html: userEmailHtml,
    });

    console.log('Emails sent:', { teamNotification, userReply });

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ 
      error: 'Failed to send emails',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}