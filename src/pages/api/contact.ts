import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  guild: z.string(),
  message: z.string(),
  terms: z.boolean(),
  gdpr: z.boolean()
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, guild, message } = req.body;
    const response = schema.safeParse(req.body);

    if (!response.success) {
      const { errors } = response.error;
      return res.status(400).json({
        error: { message: 'Invalid request', errors }
      });
    }

    const apiKey = process.env.BREVO_API_KEY || '';
    const apiUrl = 'https://api.brevo.com/v3/smtp/email';

    const emailData = {
      sender: { name, email },
      to: [
        {
          email: 'kontakt@coderscrew.pl',
          name: 'Coders Crew'
        }
      ],
      subject: 'Formularz kontaktowy',
      htmlContent: `<html><head></head><body>
      <h3>Imie i nazwisko:</h3>
      <p>${name}</p>
      <h3>Gildia:</h3>
      <p>${guild}</p>
      <h3>Wiadomość:</h3>
      <p>${message}</p>
      </body></html>`
    };

    const jsonData = JSON.stringify(emailData);
    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('api-key', apiKey);
    headers.append('content-type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: jsonData
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        return res.status(200).json({ message: data });
      });
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}
