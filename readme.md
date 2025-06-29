# GitHub User Finder Frontend

![App Screenshot](https://i.imgur.com/DYLukzH.png) 

This is the **frontend for the GitHub User Finder** phase-4 project. It allows users to:

- ✅ Search GitHub users by username  
- ✅ View profiles, repositories, and follower statistics  
- ✅ Bookmark GitHub users for future reference  
- ✅ Add, edit, and delete personal comments on bookmarks  
- ✅ Register and login with JWT-based authentication  
- ✅ Manage bookmarks and comments with a clean interface  

The frontend is built with **React + Vite**, designed to connect seamlessly with the deployed backend API.

---

## 🚀 Live Demo

🌐 [View Live Frontend](https://https-githubcom-olella93-frontend-github-user-f-production.up.railway.app/)  
🌐 [View Live Backend](https://web-production-78183.up.railway.app/)

---

## 🛠️ Tech Stack

- **React + Vite** (Frontend)
- **Axios** for API calls
- **Flask + Flask-JWT + Flask-Migrate** (Backend, separate repo)
- **PostgreSQL** (Database)
- **Railway** for backend deployment
- **Render** (optional) for frontend deployment

---

## 📸 Features

- **Search GitHub Users:** Search any GitHub username and view profile details pulled from GitHub’s API.
- **Bookmark Users:** Save your favorite GitHub users for easy reference.
- **Comment System:** Add personal notes on bookmarked users, edit, and delete them as needed.
- **User Authentication:**  
  - Register new users  
  - Login and get JWT tokens  
  - Secure bookmarks and comments under each user
- **Responsive & Clean UI:** Designed for clarity and ease of navigation.

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/olella93/FrontEnd-GitHub-User-Finder.git
cd FrontEnd-GitHub-User-Finder

2️⃣ Install dependencies

npm install

3️⃣ Set API Base URL
Open src/api.jsx and confirm:

const API = axios.create({
  baseURL: 'https://web-production-78183.up.railway.app//api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

4️⃣ Run the frontend locally

npm run dev

The app will be accessible at http://localhost:5173.

🪄 Environment Variables
None required for local development, but ensure:

✅ Backend CORS settings include:
http://localhost:5173
https://https-githubcom-olella93-frontend-github-user-f-production.up.railway.app

🚀 Deployment
You can deploy the frontend easily on:

- Render
- Vercel
- Netlify

Set the build command:

npm run build

and publish the dist/ folder.

🤝 Contributing
This project is part of a school project and is primarily maintained by Richard Olella, Bariu Andrew and Elvis Wachira.

Feel free to fork, clone, and contribute with:

- UI improvements
- Error handling enhancements
- Adding unit tests

🧑‍🏫 Project Purpose

This project demonstrates:

✅ API integration with external services (GitHub API)
✅ User authentication flows with JWT
✅ CRUD operations (POST, GET, PUT, DELETE) with a real database
✅ Deployment of a full-stack application on cloud platforms

📄 License

This project is for educational purposes and open for learning and improvement.
