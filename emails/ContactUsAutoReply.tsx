import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface ContactConfirmationProps {
  name: string;
  message: string;
}

export default function ContactUsAutoReply({ name, message }: ContactConfirmationProps) {
  const firstName = name.split(' ')[0] || name || 'there';
  
  return (
    <Html>
      <Head />
      <Preview>Thanks for the message! (We promise we're not ignoring you...)</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Hey {firstName}!</Heading>
          
          <Text style={paragraph}>
            Thanks a million for getting in touch! 🎉
          </Text>
          
          <Text style={paragraph}>
            Your message has landed safely in our inbox — think of it like a carrier pigeon that actually made it through the storm without losing the note.
          </Text>
          
          <Text style={paragraph}>
            We're currently brewing coffee / untangling our thoughts / rescuing our cat from the Christmas tree lights (delete as appropriate), but we'll read your message very soon and get back to you faster than you can say "where's my reply?!" 
          </Text>

          <Section style={messageBox}>
            <Text style={messageLabel}>Your message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={paragraph}>
            In the meantime, feel free to send us carrier pigeons, smoke signals, or more emails if it's super urgent. We won't judge. 😄
          </Text>
          
          <Section style={ctaSection}>
            <Link href="https://ohyeahsaas.com" style={button}>
              Visit Our Website
            </Link>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              Talk soon,<br />
              <strong>The OhYeahSaaS Crew</strong>
            </Text>
            <Text style={footerTextSmall}>
              P.S. If we take longer than 48 hours, feel free to send a polite "hey... you alive?" follow-up. We deserve it.
            </Text>
            <Text style={footerContact}>
              OhYeahSaaS<br />
              Email: <Link href="mailto:info@ohyeahsaas.com" style={link}>info@ohyeahsaas.com</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '32px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#333',
  padding: '0 40px',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  padding: '20px',
  margin: '20px 40px',
  borderRadius: '8px',
  borderLeft: '4px solid #667eea',
};

const messageLabel = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#667eea',
  margin: '0 0 10px 0',
};

const messageText = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#555',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e8e8e8',
  margin: '20px 40px',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#667eea',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const footer = {
  textAlign: 'center' as const,
  marginTop: '32px',
  padding: '0 40px',
};

const footerText = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '22px',
};

const footerTextSmall = {
  fontSize: '12px',
  color: '#888',
  marginTop: '8px',
  fontStyle: 'italic',
};

const footerContact = {
  fontSize: '12px',
  color: '#999',
  marginTop: '20px',
  lineHeight: '18px',
};

const link = {
  color: '#667eea',
  textDecoration: 'none',
};