<div align="center">

# 🏥 MediChoice

### AI-Powered Healthcare Decision Support Platform

A production-ready **MERN Stack** application that helps users compare hospitals, discover doctors, estimate treatment costs, and receive AI-powered healthcare assistance through an intelligent chatbot.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Groq-AI-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/Render-Backend-46E3B7?style=for-the-badge" />
</p>

</div>

---

# 🌐 Live Demo

| Service | URL |
|---------|-----|
| 🚀 **Live Application** | https://medi-choice.vercel.app/ |
| ⚙️ **Backend API** | https://medichoice-backend.onrender.com |
| 🤖 **AI Chatbot Service** | https://medichoice-chatbot.onrender.com |

---

# 📖 Overview

Healthcare decisions often require users to search across multiple platforms to compare hospitals, evaluate doctors, estimate treatment costs, and explore financial assistance. This fragmented experience makes choosing the right healthcare provider both time-consuming and confusing.

**MediChoice** solves this problem by bringing these essential healthcare services into a single platform. Users can compare hospitals, discover specialists, estimate medical expenses, calculate EMIs, explore crowdfunding options, and interact with an AI-powered healthcare assistant for quick guidance.

The application follows a **production-style architecture** with independently deployed frontend, backend, AI chatbot service, and cloud database, demonstrating modern full-stack development practices.

---

# ✨ Key Features

### 🏥 Healthcare Services

- Compare hospitals based on ratings, facilities, location, and treatment costs.
- Discover doctors by specialization, experience, and hospital.
- Estimate treatment expenses before hospital visits.
- View detailed hospital and doctor information.

### 🤖 AI-Powered Assistant

- Intelligent healthcare chatbot powered by **Groq AI**.
- Provides guidance for hospitals, doctors, and healthcare-related queries.
- Fast and conversational user experience.

### 💰 Financial Assistance

- Medical EMI Calculator.
- Medical Crowdfunding support.
- Treatment cost estimation.

### 🌍 User Experience

- Secure JWT Authentication.
- Responsive UI for desktop, tablet, and mobile.
- Multi-language translation support.
- Clean and intuitive interface.

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Vite, React Router, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Authentication** | JWT |
| **AI** | Groq API |
| **Deployment** | Vercel, Render |

---

# 🏗️ System Architecture

```text
                           User
                             │
                             ▼
                React Frontend (Vercel)
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
   Backend API (Render)      AI Chatbot (Render)
          │
          ▼
      MongoDB Atlas
```

### Architecture Overview

- **Frontend:** Built with React and Vite, providing a responsive and interactive user interface.
- **Backend:** RESTful APIs developed using Node.js and Express.js for authentication, hospital, doctor, and treatment-related services.
- **Database:** MongoDB Atlas stores hospital, doctor, user, appointment, and crowdfunding data.
- **AI Service:** A dedicated chatbot service powered by the Groq API provides intelligent healthcare assistance.
- **Deployment:** Frontend hosted on Vercel, Backend and AI Chatbot deployed on Render.

---

# 📂 Project Structure

```text
MediChoice
│
├── frontend/              # React + Vite Client
│
├── backend/               # Express REST API
│
├── chatbot-service/       # AI Chatbot Service
│
└── README.md
```

---

# ⚙️ Core Functionalities

| Module | Description |
|---------|-------------|
| 🏥 Hospital Comparison | Compare hospitals using ratings, facilities, treatment costs, and location. |
| 👨‍⚕️ Doctor Discovery | Search doctors based on specialization, experience, and associated hospitals. |
| 🤖 AI Chatbot | AI-powered healthcare assistant using Groq API for user guidance. |
| 💰 Cost Estimator | Estimate treatment expenses for various medical procedures. |
| 💳 EMI Calculator | Calculate monthly installments for healthcare expenses. |
| ❤️ Crowdfunding | Create and explore fundraising campaigns for medical treatments. |
| 🌍 Translation | Translate healthcare-related information into multiple languages. |
| 🔐 Authentication | Secure user registration and login using JWT authentication. |

---

# 📸 Application Screenshots

> Replace the image paths below with your project screenshots.

## 🏠 Home Page

<p align="center">
<img src="./screenshots/home.png" width="100%" alt="Home Page"/>
</p>

---

## 🏥 Hospital Comparison

<p align="center">
<img src="./screenshots/comparison.png" width="100%" alt="Hospital Comparison"/>
</p>

---

## 👨‍⚕️ Doctor Details

<p align="center">
<img src="./screenshots/doctor.png" width="100%" alt="Doctor Details"/>
</p>

---

## 🤖 AI Healthcare Assistant

<p align="center">
<img src="./screenshots/chatbot.png" width="100%" alt="AI Chatbot"/>
</p>

---

## 💰 Treatment Cost Estimator

<p align="center">
<img src="./screenshots/estimator.png" width="100%" alt="Treatment Cost Estimator"/>
</p>

---

## ❤️ Medical Crowdfunding

<p align="center">
<img src="./screenshots/crowdfunding.png" width="100%" alt="Medical Crowdfunding"/>
</p>

---
| **Version Control** | Git & GitHub |

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed before running the project locally:

- Node.js (v18 or later)
- npm
- MongoDB Atlas account (or local MongoDB)
- Git
- Groq API Key

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/MediChoice.git

cd MediChoice
```

---

## 2. Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd ../backend
npm install
```

### AI Chatbot Service

```bash
cd ../chatbot-service
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_CHATBOT_URL=http://localhost:3000
```

> **Production Values**

```env
VITE_BACKEND_URL=https://medichoice-backend.onrender.com

VITE_CHATBOT_URL=https://medichoice-chatbot.onrender.com
```

---

## AI Chatbot (.env)

```env
GROQ_API_KEY=your_groq_api_key
```

---

# ▶️ Running the Application

### Start Backend

```bash
cd backend
npm start
```

Runs on:

```
http://localhost:5000
```

---

### Start AI Chatbot

```bash
cd chatbot-service
npm start
```

Runs on:

```
http://localhost:3000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🌐 Deployment

| Service | Platform | URL |
|----------|----------|-----|
| 🚀 Frontend | Vercel | https://medi-choice.vercel.app/ |
| ⚙️ Backend API | Render | https://medichoice-backend.onrender.com |
| 🤖 AI Chatbot | Render | https://medichoice-chatbot.onrender.com |
| 🗄️ Database | MongoDB Atlas | Cloud Hosted |

---

# 💡 Technical Highlights

- Production-ready MERN architecture
- Separate AI chatbot microservice
- RESTful API design
- JWT-based Authentication
- MongoDB Atlas cloud database
- AI integration using Groq API
- Responsive UI across devices
- Independent deployment of frontend, backend, and chatbot
- Environment-based configuration
- Modular and scalable project structure

---

# 🚀 Future Enhancements

The following features are planned for future releases:

- 📅 Appointment Booking & Management
- 👤 Patient Dashboard
- 👨‍⚕️ Doctor Dashboard
- 📹 Video Consultation
- 💳 Online Payment Integration
- 📄 AI Medical Report Analysis
- 🧠 Disease Prediction using AI
- 🏥 Live Hospital Bed Availability
- 📱 Mobile Application
- 🔔 Real-time Notifications

---

# 🧩 Technical Challenges Solved

While building MediChoice, the following engineering challenges were addressed:

- Designed and developed a full-stack MERN application.
- Built a separate AI chatbot service using the Groq API.
- Integrated JWT-based user authentication.
- Connected MongoDB Atlas for cloud-hosted data storage.
- Deployed the frontend, backend, and chatbot as independent services.
- Configured secure communication between deployed services.
- Managed environment variables for local and production environments.
- Resolved deployment issues caused by Linux filename case sensitivity.
- Built a responsive interface for desktop, tablet, and mobile devices.

---

# 📚 What I Learned

This project strengthened my understanding of:

- Full-Stack MERN Development
- REST API Design
- JWT Authentication
- MongoDB Atlas
- AI Integration using Groq
- Production Deployment with Vercel & Render
- Environment Variable Management
- Git & GitHub Workflow
- Debugging Production Issues
- Building Scalable Web Applications

---

# 👨‍💻 Author

## Aditya Dahake

**B.Tech – Electronics & Telecommunication Engineering**

Passionate Full Stack Developer focused on building scalable web applications and solving real-world problems through modern technologies.

---

## 📬 Connect With Me

- **GitHub:** https://github.com/YOUR_GITHUB_USERNAME
- **LinkedIn:** https://linkedin.com/in/YOUR_LINKEDIN
- **Portfolio:** https://YOUR_PORTFOLIO
- **Email:** YOUR_EMAIL

---

# ⭐ If You Like This Project

If you found this project useful or interesting, consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates future improvements.

---

<div align="center">

### ❤️ Built with MERN Stack, AI & Passion

**Thank you for visiting this repository!**

</div>
