# 🚀 CodeFlash - Flashcard-Based Developer Tool

![CodeFlash](https://img.shields.io/badge/CodeFlash-FastAPI%20%7C%20Next.js-blue.svg)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)

CodeFlash is a **flashcard-based developer tool** for storing and managing code snippets. Built using **FastAPI** for the backend and **Next.js** for the frontend, it helps developers quickly save, search, and retrieve their frequently used code snippets.

## 📌 Features
- ✨ Store and retrieve code snippets with ease
- 🔍 Search for snippets efficiently
- 🔄 Sync snippets using Firebase Firestore
- 📚 Organized by programming languages & tags
- 🏎️ Fast and responsive UI with Next.js

---

## ⚡ Tech Stack

| Frontend  | Backend  | Database  | Hosting |
|-----------|---------|----------|---------|
| Next.js (React) | FastAPI | Firebase Firestore | Vercel & Firebase |

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/CodeFlash.git
cd CodeFlash
```
### **2️⃣ Backend Setup (FastAPI + Firebase)**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

```
---
### **3️⃣ Frontend Setup (Next.js)**
```bash
cd frontend
npm install
export const API_URL = 'http://127.0.0.1:8000';
npm run dev
```
---
## **👥 Contributing**
We welcome contributions! 🚀 If you'd like to improve this project, follow these steps:
- Fork the repository 🍴
- Create a new branch (git checkout -b feature-branch)
- Commit your changes (git commit -m 'Add new feature')
- Push to the branch (git push origin feature-branch)
- Open a Pull Request 📩
