# World of Warcraft Guild Website

### [Demo](https://noideaguild.netlify.app/)

No Idea Guild Website

## Introduction

This repository contains the source code for the No Idea Guild website, which was developed from scratch using HTML, CSS, and JavaScript. The website serves as an online presence for the No Idea Guild gaming community, showcasing information about the guild, its activities, and providing a recruitment form for potential members.

## Technologies Used

- HTML
- CSS
- JavaScript
- Express.js
- Nodemailer

## Features

1. **Responsive Design**: The website is designed to be fully responsive, ensuring a seamless user experience across various devices.

2. **Recruitment Form**: The website includes a recruitment form that potential members can fill out to apply for membership. The form uses HTML5 form validation for user-friendly and accurate input handling.

3. **Express.js & Nodemailer**: The form data is collected and processed on the server-side using Express.js. Nodemailer is integrated to securely send the form data to the specified email address for review and follow-up.

## Deployment

The website is deployed on Netlify, providing a fast and reliable hosting solution. Any changes made to the repository will automatically trigger a new deployment to the live website.

## Getting Started

1. Clone the repository: `git clone https://github.com/dillon-porter/guild-website.git`

2. Install dependencies: `npm install`

3. Start the development server: `npm start`

## Directory Structure

├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   └── index.html
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


![noideaguildwebsite](https://github.com/dillon-porter/guild-website/assets/12597841/5908e382-39d4-45fd-b5cd-80b392f09690)


## Configuration

### Server-Side

The server-side code is implemented in `sendemail.js`, where Express.js and Nodemailer are set up to handle form submissions and sending email notifications. Make sure to set the appropriate email address to receive the form data by updating the `receiverEmail` variable in `app.js`.

### Deployment

The deployment to Netlify is set up through continuous integration. Any changes pushed to the `main` branch will automatically trigger a new deployment to the live website.

## Conclusion

Developing the No Idea Guild website from scratch using HTML, CSS, JavaScript, and integrating Express.js and Nodemailer for form handling and email notifications was an exciting and rewarding experience. The website now provides an engaging platform for potential guild members to learn more about the guild and apply for membership.

Please feel free to explore the live website at [https://noideaguild.netlify.app/](https://noideaguild.netlify.app/) or clone this repository to make further improvements or modifications to the website. If you have any questions or feedback, don't hesitate to get in touch.

Thank you for visiting the No Idea Guild website repository!


