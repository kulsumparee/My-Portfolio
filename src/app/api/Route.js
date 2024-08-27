import { H1Icon } from '@heroicons/react/24/outline';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FORM_EMAIL;

export async function POST(req, res) {
    try {
        const { email, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email], // Corrected the `to` field to properly use the email variable
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            )
        });

        if (error) {
            return res.status(500).json({ error });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
