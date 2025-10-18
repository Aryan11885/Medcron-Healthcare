// server/index.js
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

// CORS: allow localhost and Vercel frontend
const allowedOrigins = [
  "http://localhost:3000",
  "https://medcron-healthcare.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / curl
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS not allowed"), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("Backend running! 🚀"));

// POST /send-email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, area, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.EMAIL_TO,          // recipient
    from: process.env.EMAIL_USER,      // verified sender
    replyTo: email,                     // dynamic user email
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

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("SendGrid API Error:", error.response?.body || error.message);
    res.status(500).json({ message: "Failed to send email.", error: error.message });
  }
});

// Render assigns a port automatically
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
