// Particle.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded');
});

// Dropdown functionality for project descriptions
const toggleButtons = document.querySelectorAll('.toggle-description');
const projectCards = document.querySelectorAll('.project-card');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        projectCards[index].classList.toggle('active');
    });
});

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Set up email transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'rar89990@gmail.com',
            pass: 'Khatri89990'
        }
    });

    // Send email
    transporter.sendMail({
        from: email,
        to: 'rar89990@gmail.com',
        subject: `Message from ${name}`,
        text: message
    }, (err, info) => {
        if (err) {
            return res.status(500).send('Error sending email');
        }
        res.send('Message sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
