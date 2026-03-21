// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
const hData = require("./hData");
const dData = require("./dData");

const app = express();
const port = process.env.PORT || 3000;

// Groq client using env variable
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // DATA OPTIMIZATION: Condense doctor data to save tokens and prevent Rate Limits
    const condensedDoctors = dData.map((d) => ({
      name: d.doctor_name,
      spec: d.specialization,
      exp: d.experience_years,
      rating: d.avg_rating,
      hospital:
        d.hospital_name || (d.hospital ? d.hospital.hospital_name : "N/A"),
      city: d.city || (d.hospital ? d.hospital.city : "N/A"),
      treatments: d.treatments || [],
    }));

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are the MediChoice Medical Assistant. 
          
          DATASET:
          Hospitals: ${JSON.stringify(hData)}
          Doctors: ${JSON.stringify(condensedDoctors)}

          STRICT FORMATTING RULES:
          1. NO intro or outro text (Never say "Here is the list" or "I hope this helps"). 
          2. Use single line breaks only. No double empty lines.
          3. Bold ONLY the **Hospital Name** and **Doctor Name**.
          4. If a user asks for a doctor, use this exact template:
             **Doctor Name** (Specialization)
             - Exp: Years | Rating: ★Stars
             - Hospital: **Hospital Name**, City
          5. If a user asks for a hospital, use this exact template:
             **Hospital Name** (City)
             - Facilities: Item 1, Item 2
             - Contact: Number`,
        },
        { role: "user", content: userMessage },
      ],
      model: "llama-3.1-8b-instant", // High speed, high rate-limit model
      temperature: 0.2, // Keeps formatting consistent
      max_tokens: 500, // Prevents token wastage
    });

    res.json({ reply: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("Chat Error:", error);
    res
      .status(500)
      .json({ reply: "Connection error. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Chatbot service running on http://localhost:${port}`);
});
