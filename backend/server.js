const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const env  = require('dotenv')

const app = express();
app.use(cors());
app.use(express.json());


app.post('/contact', async(req,res) =>{
    const {nama, email, phone, subject, message} = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: env.EMAIL,
            pass: env.PASS
        }
    });

    let mailOptions = {
        from: email,
        to: env.EMAIL,
        subject: `[PORTOFOLIO] ${subject}`,
        text: `
                Name: ${nama}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
                `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: 'succesfully sending the email'})
    }catch(error){
        res.status(500).json({message: 'Failed to send the email'})
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));