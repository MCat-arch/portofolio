import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'khoerunnisautami22@gmail.com',
            subject: `Porotofolio Contact: ${subject}`,
            text: `
                Nama: ${name}
                Email: ${email}
                Subjek: ${subject}
                Pesan: ${message}
            `,
            html: `
            <div style="font-family: sans-serif; padding: 20px;">
                <h2>Porotofolio Contact Form</h2>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subjek:</strong> ${subject}</p>
                <p><strong>Pesan:</strong></p>
                <p>${message}</p>
            </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}