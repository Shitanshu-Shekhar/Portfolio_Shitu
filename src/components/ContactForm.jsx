import { useState } from 'react';

const emptyMessage = { kind: 'idle', text: '' };

export default function ContactForm() {
  const [status, setStatus] = useState(emptyMessage);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending || !event.currentTarget.reportValidity()) return;
    setSending(true);
    setStatus(emptyMessage);

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'The message could not be sent. Please email me directly.');
      setStatus({ kind: 'success', text: 'Your message was sent. Thank you — I’ll be in touch.' });
      form.reset();
    } catch (error) {
      setStatus({ kind: 'error', text: error.message || 'The message could not be sent. Please email me directly.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="How should I address you?" />
      <label htmlFor="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
      <label htmlFor="contact-message">What’s on your mind?</label>
      <textarea id="contact-message" name="message" rows="4" required minLength={10} maxLength={3000} placeholder="A few details about your message..." />
      <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <span>{sending ? '◌' : '↗'}</span></button>
      <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.text}</p>
      <p className="form-note">Messages are sent through the portfolio’s email endpoint. <a href="mailto:shekharshitanshu8@gmail.com">Email me directly</a>.</p>
    </form>
  );
}
