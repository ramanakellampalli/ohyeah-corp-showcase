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

interface TeamNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function TeamNotification({ name, email, message }: TeamNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>📬 New Contact Form Submission</Heading>
          </Section>
          
          <Section style={content}>
            <Section style={field}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{name}</Text>
            </Section>
            
            <Section style={field}>
              <Text style={label}>Email:</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`} style={emailLink}>
                  {email}
                </Link>
              </Text>
            </Section>
            
            <Section style={field}>
              <Text style={label}>Message:</Text>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>
            
            <Hr style={hr} />
            
            <Section style={footer}>
              <Text style={footerText}>
                💡 <strong>Tip:</strong> You can reply directly to this email to respond to {name}.
              </Text>
              <Text style={footerTextSmall}>
                Sent via OhYeahSaaS Contact Form
              </Text>
            </Section>
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
  marginTop: '40px',
  marginBottom: '64px',
  borderRadius: '8px',
  overflow: 'hidden',
  maxWidth: '600px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '30px 40px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0',
  textAlign: 'center' as const,
};

const content = {
  padding: '40px',
};

const field = {
  marginBottom: '24px',
};

const label = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#667eea',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 8px 0',
};

const value = {
  fontSize: '16px',
  color: '#1a1a1a',
  margin: '0',
  padding: '12px 16px',
  backgroundColor: '#f9fafb',
  borderRadius: '6px',
  borderLeft: '3px solid #667eea',
};

const emailLink = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '500',
};

const messageBox = {
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '6px',
  border: '1px solid #e8e8e8',
  marginTop: '8px',
};

const messageText = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#333',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e8e8e8',
  margin: '30px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '22px',
  margin: '0 0 10px 0',
};

const footerTextSmall = {
  fontSize: '12px',
  color: '#999',
  margin: '0',
};