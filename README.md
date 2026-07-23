<div align="center">

# 🏥 MediChoice

### AI-Powered Healthcare Decision Support Platform

Helping users compare hospitals, discover doctors, estimate treatment costs, and make informed healthcare decisions through AI.

<br>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</p>

<p align="center">

🚀 MERN Stack • 🤖 AI Powered • 🏥 Healthcare • 💰 Cost Estimation • ❤️ Crowdfunding

</p>

</div>

---

# 📸 Project Preview

> **Replace the image below with a screenshot of your homepage.**

<p align="center">
<img src="./screenshots/home.png" alt="MediChoice Home" width="100%">
</p>

---

# 📖 Overview

Healthcare decisions often require patients to compare hospitals, evaluate treatment costs, find experienced doctors, and understand available financial support. Since this information is usually spread across multiple platforms, the process becomes time-consuming and confusing.

**MediChoice** is a full-stack MERN application that brings these healthcare services together in a single platform. It enables users to compare hospitals, search doctors, estimate treatment costs, calculate medical EMIs, interact with an AI-powered healthcare chatbot, and explore medical crowdfunding options.

The goal of MediChoice is to make healthcare decisions more transparent, accessible, and financially manageable through technology.

---

# ✨ Key Features

| Feature | Description |
|----------|-------------|
| 🏥 **Hospital Comparison** | Compare hospitals based on ratings, treatment costs, facilities, and location. |
| 👨‍⚕ **Doctor Discovery** | Browse doctor profiles, specializations, experience, and associated hospitals. |
| 🤖 **AI Healthcare Chatbot** | Get AI-assisted guidance for healthcare-related queries and platform navigation. |
| 💰 **Treatment Cost Estimator** | Estimate medical treatment expenses before visiting hospitals. |
| 💳 **EMI Calculator** | Calculate monthly installment plans for healthcare expenses. |
| ❤️ **Medical Crowdfunding** | Create and explore fundraising campaigns for medical treatments. |
| 🌍 **Multi-language Support** | Translate healthcare information into multiple languages. |
| 🔐 **Authentication** | Secure user registration and login system. |
| 📍 **Hospital Location Support** | View hospital locations for easier accessibility. |
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile devices. |

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Vite, React Router, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT Authentication |
| **AI Integration** | AI Chatbot Service |
| **Development Tools** | Git, GitHub, npm |

---

# 🏗 System Architecture

```text
                           ┌──────────────────────┐
                           │        User          │
                           └──────────┬───────────┘
                                      │
                                      ▼
                  ┌───────────────────────────────────┐
                  │       React Frontend (Vite)       │
                  │                                   │
                  │  • Hospital Comparison            │
                  │  • Doctor Discovery               │
                  │  • AI Chatbot                     │
                  │  • Cost Estimator                 │
                  │  • EMI Calculator                 │
                  │  • Crowdfunding                   │
                  └───────────────┬───────────────────┘
                                  │
                             REST APIs
                                  │
                                  ▼
                  ┌───────────────────────────────────┐
                  │      Node.js + Express Backend    │
                  │                                   │
                  │  • Authentication                 │
                  │  • Hospital APIs                  │
                  │  • Doctor APIs                    │
                  │  • Comparison Logic               │
                  │  • Crowdfunding APIs              │
                  └───────────────┬───────────────────┘
                                  │
                  ┌───────────────┴───────────────┐
                  ▼                               ▼
         ┌──────────────────┐          ┌──────────────────┐
         │     MongoDB      │          │   AI Chatbot     │
         │    Database      │          │     Service      │
         └──────────────────┘          └──────────────────┘
```

---

# 🌟 Highlights

- ✅ Full-Stack MERN Application
- ✅ AI-Powered Healthcare Assistant
- ✅ Hospital & Doctor Search
- ✅ Intelligent Hospital Comparison
- ✅ Medical Cost Estimation
- ✅ EMI Calculator
- ✅ Medical Crowdfunding
- ✅ Multi-language Support
- ✅ Responsive User Interface
- ✅ Modular & Scalable Architecture

---

# 📂 Project Structure

```text
MediChoice
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── chatbot-service
│   ├── server.js
│   ├── package.json
│   └── chatbot-data
│
├── screenshots
│
├── README.md
│
└── package.json
```

---

# ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/MediChoice.git

cd MediChoice
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend

npm install
```

---

### 4️⃣ Install Chatbot Service Dependencies

```bash
cd ../chatbot-service

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

Create another `.env` file inside the **frontend** folder.

```env
VITE_API_URL=http://localhost:5000
```

> **Note:** Add any additional API keys or environment variables required by your project.

---

# ▶️ Running the Project

### Start Backend

```bash
cd backend

npm start
```

Backend Server

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend

npm run dev
```

Frontend

```
http://localhost:5173
```

---

### Start AI Chatbot Service

```bash
cd chatbot-service

npm start
```

---

# 🌐 Application Flow

```text
User
   │
   ▼
React Frontend
   │
   ▼
REST API
   │
   ▼
Express Backend
   │
   ├────────► MongoDB
   │
   └────────► AI Chatbot Service
```

---

# 📷 Project Screenshots

> Replace the placeholder images below with screenshots of your project.

---

## 🏠 Home Page

<p align="center">
<img src="./screenshots/home.png" width="100%" alt="Home Page">
</p>

---

## 🏥 Hospital Comparison

<p align="center">
<img src="./screenshots/comparison.png" width="100%" alt="Hospital Comparison">
</p>

---

## 👨‍⚕ Doctor Details

<p align="center">
<img src="./screenshots/doctor.png" width="100%" alt="Doctor Details">
</p>

---

## 🤖 AI Chatbot

<p align="center">
<img src="./screenshots/chatbot.png" width="100%" alt="AI Chatbot">
</p>

---

## 💰 Cost Estimator

<p align="center">
<img src="./screenshots/estimator.png" width="100%" alt="Cost Estimator">
</p>

---

## ❤️ Medical Crowdfunding

<p align="center">
<img src="./screenshots/crowdfunding.png" width="100%" alt="Medical Crowdfunding">
</p>

---

# 🚀 Future Scope

The following features are planned for future releases:

- 📅 Complete Appointment Booking & Management
- 👨‍⚕ Doctor Dashboard
- 👤 Patient Dashboard
- 📄 AI Medical Report Analysis
- 🧠 Disease Prediction using AI
- 📹 Video Consultation
- 💳 Online Payment Integration
- 🔔 Real-time Appointment Notifications
- 📱 Mobile Application
- 🏥 Live Hospital Bed Availability

---

# 📌 Current Project Status

| Module | Status |
|----------|--------|
| Hospital Comparison | ✅ Completed |
| Doctor Search | ✅ Completed |
| AI Chatbot | ✅ Completed |
| Authentication | ✅ Completed |
| Cost Estimator | ✅ Completed |
| EMI Calculator | ✅ Completed |
| Crowdfunding | ✅ Completed |
| Translation | ✅ Completed |
| Responsive UI | ✅ Completed |
| Appointment Booking | 🟡 Prototype |
| Patient Dashboard | 🚧 Planned |
| Doctor Dashboard | 🚧 Planned |

---

# 🗺️ Roadmap

The following improvements are planned for future versions of MediChoice:

- [ ] Complete Appointment Booking System
- [ ] Patient Dashboard
- [ ] Doctor Dashboard
- [ ] AI-based Medical Report Analysis
- [ ] Disease Prediction using Symptoms
- [ ] Video Consultation
- [ ] Online Payment Gateway
- [ ] Health Insurance Comparison
- [ ] Mobile Application
- [ ] Real-time Notifications

---

# 🚀 Deployment

The application can be deployed using the following platforms:

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render / Railway |
| Database | MongoDB Atlas |
| AI Chatbot | Render / Railway |

---

# 📊 Project Statistics

| Category | Details |
|-----------|----------|
| Architecture | MERN Stack |
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB |
| Authentication | JWT |
| AI Integration | Healthcare Chatbot |
| Responsive Design | ✅ Yes |
| Open Source | ✅ Yes |

---

# 🤝 Contributing

Contributions are always welcome.

If you'd like to improve MediChoice:

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature/feature-name
```

5. Open a Pull Request

---

# 📝 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project under the terms of the MIT License.

---

# 👨‍💻 Author

## Aditya Dahake

**B.Tech – Electronics & Telecommunication Engineering**

Passionate Full Stack Developer focused on building modern, scalable, and AI-powered web applications.

### 📬 Connect with Me

<p align="left">

<a href="https://github.com/your-github">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github">
</a>

<a href="https://linkedin.com/in/your-linkedin">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin">
</a>

<a href="https://yourportfolio.com">
<img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel">
</a>

<a href="mailto:your@email.com">
<img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail">
</a>

</p>

---

# ⭐ Show Your Support

If you found this project useful or interesting, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

<div align="center">

## ❤️ Built with MERN Stack & AI

### Making Healthcare Decisions Smarter

⭐ **Thank you for visiting this repository!**

</div>
