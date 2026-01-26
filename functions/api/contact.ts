import { Resend } from 'resend';

// Cloudflare Pages Function type
type Env = {
  RESEND_API_KEY: string;
};

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(env.RESEND_API_KEY);

    // Team notification HTML
    const teamHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif; line-height: 1.6; color: #333; background-color: #f6f9fc; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto 64px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); background: #ffffff; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center; }
            .header h1 { color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; }
            .content { padding: 40px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 12px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0; display: block; }
            .value { font-size: 16px; color: #1a1a1a; margin: 0; padding: 12px 16px; background-color: #f9fafb; border-radius: 6px; border-left: 3px solid #667eea; display: block; }
            .value a { color: #667eea; text-decoration: none; font-weight: 500; }
            .message-box { background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e8e8e8; margin-top: 8px; white-space: pre-wrap; font-size: 15px; line-height: 24px; color: #333; }
            .footer { text-align: center; margin-top: 30px; padding-top: 30px; border-top: 1px solid #e8e8e8; }
            .footer p { font-size: 14px; color: #666; margin: 0 0 10px 0; }
            .footer-small { font-size: 12px; color: #999; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message}</div>
              </div>
              <div class="footer">
                <p>💡 <strong>Tip:</strong> You can reply directly to this email to respond to ${name}.</p>
                <p class="footer-small">Sent via OhYeahSaaS Contact Form</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // User auto-reply HTML
    const firstName = name.split(' ')[0] || name || 'there';
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif; line-height: 1.6; color: #333; background-color: #f6f9fc; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px 0 48px; margin-bottom: 64px; background: #ffffff; }
            h1 { color: #1a1a1a; font-size: 32px; font-weight: 700; text-align: center; margin: 30px 0; }
            .paragraph { font-size: 16px; line-height: 26px; color: #333; padding: 0 40px; margin: 16px 0; }
            .message-box { background-color: #f9fafb; padding: 20px; margin: 20px 40px; border-radius: 8px; border-left: 4px solid #667eea; }
            .message-label { font-size: 14px; font-weight: 600; color: #667eea; margin: 0 0 10px 0; }
            .message-text { font-size: 14px; line-height: 22px; color: #555; margin: 0; white-space: pre-wrap; }
            .hr { border: 0; border-top: 1px solid #e8e8e8; margin: 20px 40px; }
            .cta-section { text-align: center; margin: 30px 0; }
            .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600; }
            .footer { text-align: center; margin-top: 32px; padding: 0 40px; }
            .footer p { font-size: 14px; color: #666; line-height: 22px; margin: 8px 0; }
            .footer-small { font-size: 12px; color: #888; font-style: italic; }
            .footer-contact { font-size: 12px; color: #999; margin-top: 20px; line-height: 18px; }
            .footer-contact a { color: #667eea; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hey ${firstName}!</h1>
            <p class="paragraph">Thanks a million for getting in touch! 🎉</p>
            <p class="paragraph">Your message has landed safely in our inbox — think of it like a carrier pigeon that actually made it through the storm without losing the note.</p>
            <p class="paragraph">We're currently brewing coffee / untangling our thoughts / rescuing our cat from the Christmas tree lights (delete as appropriate), but we'll read your message very soon and get back to you faster than you can say "where's my reply?!"</p>
            <div class="message-box">
              <p class="message-label">Your message:</p>
              <p class="message-text">${message}</p>
            </div>
            <hr class="hr">
            <p class="paragraph">In the meantime, feel free to send us carrier pigeons, smoke signals, or more emails if it's super urgent. We won't judge. 😄</p>
            <div class="cta-section">
              <a href="https://ohyeahsaas.com" class="button">Visit Our Website</a>
            </div>
            <div class="footer">
              <p>Talk soon,<br><strong>The OhYeahSaaS Crew</strong></p>
              <p class="footer-small">P.S. If we take longer than 48 hours, feel free to send a polite "hey... you alive?" follow-up. We deserve it.</p>
              <p class="footer-contact">OhYeahSaaS<br>Email: <a href="mailto:info@ohyeahsaas.com">info@ohyeahsaas.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send team notification
    await resend.emails.send({
      from: 'OhYeahSaaS Contact <info@ohyeahsaas.com>',
      replyTo: email,
      to: 'info@ohyeahsaas.com',
      subject: `New Contact Form Submission from ${name}`,
      html: teamHtml,
    });

    // Send user auto-reply
    await resend.emails.send({
      from: 'OhYeahSaaS <info@ohyeahsaas.com>',
      to: email,
      subject: 'Thank you for contacting OhYeahSaaS',
      html: userHtml,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Emails sent successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to send emails',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};