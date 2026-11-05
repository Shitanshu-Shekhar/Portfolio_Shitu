# Portfolio_Shitu

React portfolio for Shitanshu Shekhar, built with Vite and deployed as a static frontend on Vercel.

## Local development

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Contact form

The form posts to the Vercel function in `api/contact.js`. Configure these project environment variables in Vercel to enable email delivery:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (a sender address verified with Resend)
- `CONTACT_TO_EMAIL` (optional; defaults to the portfolio email address)

Until the email provider is configured, the form reports that it could not send and points visitors to the direct email link.
