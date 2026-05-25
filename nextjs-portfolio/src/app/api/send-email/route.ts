import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function escapeHtml(str: string): string {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"'/]/g, (match) => {
        const map: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;'
        };
        return map[match];
    });
}

function containsHtmlTags(str: string): boolean {
    return /[<>]/.test(str);
}

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // 1. Check for missing fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // 2. Validate types
        if (
            typeof name !== 'string' || 
            typeof email !== 'string' || 
            typeof subject !== 'string' || 
            typeof message !== 'string'
        ) {
            return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
        }

        // 3. Validate email structure
        if (!validateEmail(email)) {
            return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
        }

        // 4. Reject HTML tags / characters (< or >) to prevent HTML/XSS injection bypass
        if (containsHtmlTags(name) || containsHtmlTags(subject) || containsHtmlTags(message)) {
            return NextResponse.json({ 
                message: 'HTML tag characters (< or >) are not allowed in name, subject, or message.' 
            }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        // Escape HTML for safety when rendering in the email body
        const escapedName = escapeHtml(name);
        const escapedEmail = escapeHtml(email);
        const escapedSubject = escapeHtml(subject);
        const escapedMessage = escapeHtml(message).replace(/\n/g, '<br/>');

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
            <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #333;">
                <h2 style="color: #4F46E5; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px;">Portfolio Contact Form</h2>
                <p><strong>Nama:</strong> ${escapedName}</p>
                <p><strong>Email:</strong> ${escapedEmail}</p>
                <p><strong>Subjek:</strong> ${escapedSubject}</p>
                <p><strong>Pesan:</strong></p>
                <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; border: 1px solid #E5E7EB; white-space: pre-wrap;">${escapedMessage}</div>
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