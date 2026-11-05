const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Use POST to send a message.' });
  }

  const { name, email, message } = request.body || {};
  const safeName = typeof name === 'string' ? name.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim() : '';
  const safeEmail = typeof email === 'string' ? email.trim() : '';
  const safeMessage = typeof message === 'string' ? message.trim() : '';

  if (safeName.length < 2 || safeName.length > 80 || !EMAIL_PATTERN.test(safeEmail) || safeEmail.length > 254 || safeMessage.length < 10 || safeMessage.length > 3000) {
    return response.status(400).json({ error: 'Check the name, email, and message fields, then try again.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || 'shekharshitanshu8@gmail.com';
  if (!apiKey || !from) {
    return response.status(503).json({ error: 'Email delivery is not configured yet. Please use the direct email link.' });
  }

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: safeEmail,
        subject: `Portfolio message from ${safeName}`,
        text: `From: ${safeName}\nReply to: ${safeEmail}\n\n${safeMessage}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!result.ok) {
      return response.status(502).json({ error: 'The email service could not accept the message. Please email me directly.' });
    }
    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ error: 'The email service is temporarily unavailable. Please email me directly.' });
  }
}
