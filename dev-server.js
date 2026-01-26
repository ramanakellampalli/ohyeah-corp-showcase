import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import TeamNotification from './emails/TeamNotification.tsx';
import ContactUsAutoReply from './emails/ContactUsAutoReply.tsx';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
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

    console.log('Sending emails...');

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

    console.log('Team notification sent:', teamNotification.data?.id);

    // 2. Send auto-reply to the user
    const userReply = await resend.emails.send({
      from: 'OhYeahSaaS <info@ohyeahsaas.com>',
      to: email,
      subject: 'Thank you for contacting OhYeahSaaS',
      html: userEmailHtml,
    });

    console.log('User reply sent:', userReply.data?.id);

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully',
      ids: {
        teamNotification: teamNotification.data?.id,
        userReply: userReply.data?.id
      }
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ 
      error: 'Failed to send emails',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Dev API server running on http://localhost:${PORT}`);
  console.log(`📧 Resend API key: ${process.env.RESEND_API_KEY ? '✓ Found' : '✗ Missing'}`);
});