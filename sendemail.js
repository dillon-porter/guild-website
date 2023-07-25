const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Serve the static HTML form file
app.use(express.static('public'));

// POST route to handle the form submission
app.post('/submit-form', (req, res) => {
    // Get the form data from the request body
    const formData = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'hotmail', // Update with your email service (e.g., gmail, outlook)
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Email content
    const emailContent = `
    New Form Submission:
    Wow Armory Link: ${formData.wow_armory}
    Battle.net Link: ${formData['battle.net']}
    Discord: ${formData.discord}
    Role: ${formData.role}
    Class: ${formData.class}
    Specialization: ${formData.spec}
    Warcraft Logs Link: ${formData['warcraft-logs']}
    Raiding Experience: ${formData['raiding-experience']}
    Reason for Joining: ${formData['why-join']}
    Can Handle Criticism and Feedback: ${formData['handle-criticism']}
    Additional Info: ${formData['Additonal Info']}
    Read Guild Charter: ${formData['read-guild-charter-yes']}
  `;

    // Email options
    const mailOptions = {
        from: 'dillonporter@hotmail.com', // Your Hotmail email address
        to: 'dillonporter@hotmail.com', // Your Hotmail email address
        subject: 'New Form Submission',
        text: emailContent,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Form submission successful');
        }
    });
});

// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});