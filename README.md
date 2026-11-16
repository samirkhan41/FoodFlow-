# 🍔 FoodFlow – Full-Stack Food Delivery Platform

A modern full-stack food delivery application built using the MERN stack, featuring secure authentication, restaurant browsing, online food ordering, and real-time order tracking.

## 🚀 Overview

FoodFlow is a full-stack food delivery platform designed to simplify the food ordering experience. Users can explore restaurants, browse menus, add items to their cart, place orders, and track their order status in real time.

The application connects a responsive React frontend with a Node.js and Express backend, using MongoDB for data management and WebSockets for real-time communication.

## ✨ Key Features

- **User Authentication:** Secure user registration and login using JWT authentication.
- **Restaurant Browsing:** Explore restaurants and their available food menus.
- **Food Menu:** Browse food items and view product details.
- **Shopping Cart:** Add, remove, and manage food items.
- **Order Management:** Place orders and manage order information.
- **Real-Time Tracking:** Receive live order status updates using WebSockets.
- **Responsive UI:** User-friendly interface across different screen sizes.
- **RESTful APIs:** Structured backend APIs for frontend and database communication.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- JavaScript

**Backend**
- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- WebSockets

**Database**
- MongoDB
- Mongoose

**Development Tools**
- Git
- GitHub
- VS Code
- Postman

## 🏗️ Project Architecture

The application follows a client-server architecture:

1. React.js handles the user interface and frontend interactions.
2. Node.js and Express.js handle backend logic and API requests.
3. MongoDB stores users, restaurants, menu items, and order information.
4. JWT manages authenticated user sessions.
5. WebSockets enable real-time order status communication.

## 📁 Project Structure

```text
FoodFlow/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── hooks/
│       ├── services/
│       └── assets/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   └── utils/
│
├── .gitignore
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd FoodFlow
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Run the application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

## 🔐 Security

- JWT-based authentication.
- Protected backend routes.
- Environment variables for sensitive configuration.
- Server-side request validation.

## 🎯 Project Objectives

- Build a scalable full-stack food ordering application.
- Implement secure authentication and API integration.
- Understand real-time communication using WebSockets.
- Develop practical experience with MERN stack architecture.

## 👨‍💻 Developer

**Samir Khan**

Full Stack Developer | MERN Stack

- Portfolio: https://samirk.site
- GitHub: https://github.com/samirkhan41
- LinkedIn: https://linkedin.com/in/samir-khan-649158358

---

⭐ If you find this project interesting, consider giving it a star!

**Note:** This project is under development. Features and documentation will be updated as development progresses.
