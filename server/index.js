const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allow your Vercel frontend to access this API
app.use(cors({
  origin: ["https://medcron-healthcare.vercel.app"], // Replace with your frontend's deployed URL
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✅ Email endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, phone, area, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Gmail App Password (16 chars)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `New Query from ${name}`,
      html: `
        <h2>New Query from Medcron Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Area/City:</strong> ${area}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// ✅ Use Render's port or fallback to localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
