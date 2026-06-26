# Full Stack Real-Time Chat Application

A modern **Full Stack Real-Time Chat Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** and **Socket.IO**. This application enables users to send and receive messages instantly without refreshing the page, providing a seamless real-time communication experience.

## Live Demo

### Frontend (Client)

https://chat-app-kappa-tan-76.vercel.app/

### Backend (Server)

https://chat-app-backend-gamma-teal.vercel.app/

---

## Project Overview

In this project, we build a real-time messaging platform where users can communicate instantly. The application uses **Socket.IO** to establish a persistent connection between the client and server, allowing messages to be delivered in real time.

Whenever a user sends a message, the recipient receives it immediately without reloading the application.

The entire application is deployed online using **Vercel**, making it accessible from anywhere.

---

## Features

* User Authentication
*  Real-Time Messaging
*  Instant Message Delivery
*  Multiple User Support
*  Responsive User Interface
*  Persistent Chat History
*  Full Stack MERN Architecture
*  Free Deployment on Vercel

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT Authentication
* bcryptjs

### Deployment

* Vercel

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

---

## Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## Run the Application

### Start Backend

```bash
cd server
npm run server
```

### Start Frontend

```bash
cd client
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## Real-Time Communication with Socket.IO

Socket.IO is used to establish a two-way communication channel between the frontend and backend.

### Workflow

1. User connects to the application.
2. Socket connection is established.
3. User sends a message.
4. Backend receives the message.
5. Message is emitted to the target user.
6. Recipient receives the message instantly.

This ensures a smooth and real-time chat experience.

---

## Deployment

The application is deployed using **Vercel**.

### Live URLs

* Frontend: https://chat-app-kappa-tan-76.vercel.app/
* Backend: https://chat-app-backend-gamma-teal.vercel.app/

---

## Learning Outcomes

Through this project, you will learn:

* Full Stack MERN Development
* REST API Development
* Authentication & Authorization
* MongoDB Database Integration
* Real-Time Communication with Socket.IO
* State Management in React
* Deployment using Vercel
* Client-Server Architecture

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

