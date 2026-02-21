// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');
const hData = require('./hData');

const app = express();
// Port from .env or default
const port = process.env.PORT || 3000;

// Groq client using env variable
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are the medical assistant for MediChoice.
Help users find hospitals using the provided data: ${JSON.stringify(hData)}

Formatting Rules:
1. Use a separate line for each detail.
2. Use bullet points for facilities and specializations.
3. Bold the Hospital Name.`,
        },
        { role: "user", content: userMessage },
      ],
      model: "llama-3.3-70b-versatile",
    });

    res.json({ reply: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ reply: "Connection error." });
  }
});

app.listen(port, () => {
  console.log(`Chatbot service running on http://localhost:${port}`);
});