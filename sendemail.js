// Assuming you have installed express and nodemailer packages
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Body-parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { wow_armory, battle_net, discord, role, class: selectedClass, spec, warcraft_logs, raiding_experience, why_join, handle_criticism, additional_info } = req.body;

    // Create a Nodemailer transporter using your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use the environment variable for email user
            pass: process.env.EMAIL_PASSWORD // Use the environment variable for email password
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use the environment variable for sender email
        to: process.env.EMAIL_USER, // Use the environment variable for recipient email
        subject: 'New Raider Application',
        text: `
      Wow Armory: ${wow_armory}
      Battle.net: ${battle_net}
      Discord: ${discord}
      Role: ${role}
      Class: ${selectedClass}
      Specialization: ${spec}
      Warcraft Logs: ${warcraft_logs}
      Raiding Experience: ${raiding_experience}
      Reason for Joining: ${why_join}
      Can Handle Criticism: ${handle_criticism}
      Additional Info: ${additional_info}
    `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Application submitted successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});