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

## Project Structure

/
├── node_modules/               # Installed dependencies
├── public/                     # Static public assets (favicon, etc.)
├── src/                        # Main source code
│   ├── assets/                 # (Assumed) images, logos, static assets
│   ├── components/             # React components for your app
│   ├── api.jsx                 # Axios API configuration file
│   ├── App.css                 # Global styling for App
│   ├── App.jsx                 # Main App component
│   ├── index.css               # Global CSS
│   ├── main.jsx                # React entry point (renders <App />)
├── .gitignore                  # Git ignored files
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point used by Vite
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and scripts
├── readme.md                   # Project documentation
├── testfile.txt                # (Likely your test scratch file)
└── vite.config.js              # Vite configuration


- **components/**: Contains all UI components such as `RegisterForm`, `LoginForm`, `UserCard`, `Bookmarks`, etc.
- **api.jsx**: Sets up Axios with the backend base URL and handles authentication headers.
- **App.jsx**: Main routing and application logic, including authentication state and navigation.
- **App.css**: Main stylesheet for the app.
- **main.jsx**: Entry point that renders the React app.

---

## ⚙️ How It Works

1. **User Authentication:**  
   Users can register and log in. JWT tokens are stored in localStorage and sent with each API request for authentication.

2. **Search & View GitHub Users:**  
   Users can search for any GitHub username. The app fetches and displays profile info and repositories using the GitHub API.

3. **Bookmarking:**  
   Logged-in users can bookmark GitHub users. Bookmarks are stored in the backend and associated with the logged-in user.

4. **Comments:**  
   Users can add, edit, and delete personal notes on their bookmarks.

5. **Protected Routes:**  
   Bookmarks and comment features are only accessible to authenticated users.

6. **API Communication:**  
   All backend communication is handled via Axios, using the base URL set in `api.jsx`. CORS and JWT authentication are managed automatically.

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

git clone https://github.com/olella93/FrontEnd-GitHub-User-Finder.git

cd FrontEnd-GitHub-User-Finder

2️⃣ Install dependencies

npm install

3️⃣ Set API Base URL

Open src/api.jsx and confirm:

const API = axios.create({
  baseURL: 'https://web-production-78183.up.railway.app/api',
  
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
