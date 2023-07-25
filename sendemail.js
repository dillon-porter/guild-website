const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file


// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Serve the static HTML form file
app.use(express.static('public'));

// GET route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to my application');
});

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
    // Include other form data here
  `;

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use the environment variable for sender email
        to: process.env.EMAIL_USER, // Use the environment variable for recipient email
        subject: 'New Subscription',
        text: emailContent
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});
// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});