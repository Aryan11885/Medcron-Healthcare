// server/index.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Automatically set CORS based on environment
const allowedOrigins = [
  "http://localhost:3000",                     // local dev
  "https://medcron-healthcare.vercel.app"     // your production frontend
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Optional GET route for testing
app.get("/", (req, res) => res.send("Backend running! 🚀"));

// POST /send-email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, area, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey", // literally "apikey"
        pass: process.env.SENDGRID_API_KEY
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // verified sender
      replyTo: email,               // user email from form
      to: process.env.EMAIL_TO,     // recipient (boss/company)
      subject: `New Query from ${name}`,
      html: `
        <h2>New Query from Medcron Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Area/City:</strong> ${area}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email send failed:", error.response || error);
    res.status(500).json({ message: "Failed to send email.", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
