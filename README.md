# 🍽️ Food Genie

### Smart Food Discovery & Recipe Exploration Platform

**Discover It • Explore It • Cook It • Enjoy It**

Food Genie is a full-stack web application designed to make food discovery simple, interactive, and personalized.

The platform allows users to explore food items, search foods by name or category, view food information, and interact with a modern, responsive food-focused interface.

Built using the **MERN stack**, Food Genie combines a React frontend, Node.js and Express backend, MongoDB database, RESTful APIs, and JWT-based authentication into a complete full-stack application.

---

## ✨ Features

### 🔐 User Authentication

* User registration and login
* Secure password hashing using bcrypt.js
* JWT-based authentication
* Protected API routes
* Authenticated user access
* User profile functionality

### 🍕 Food Discovery

* Browse available food items
* Display food information dynamically from MongoDB
* View food categories
* Check food availability
* Responsive food cards
* Food-focused user interface

### 🔍 Food Search

* Search foods by name
* Search foods by category
* API-based search functionality
* Dynamic search results

### 🍽️ Food Management

* Add food items
* Retrieve food items
* Update food information
* Delete food items
* Store food data in MongoDB

### 🔗 REST API Integration

* RESTful backend architecture
* Frontend-backend communication
* Axios API integration
* JSON-based request and response handling
* Protected API endpoints

### 📱 Modern User Interface

* React-based component architecture
* Responsive design
* Clean and modern interface
* User-friendly navigation
* Food-focused visual design
* Reusable UI components

---

# 🏗️ Technology Stack

## 🎨 Frontend

| Technology      | Purpose                             |
| --------------- | ----------------------------------- |
| ⚛️ React.js     | Building the user interface         |
| ⚡ Vite          | Frontend development and build tool |
| 🟨 JavaScript   | Application logic                   |
| 🎨 HTML5        | Page structure                      |
| 🎨 CSS3         | Styling and responsive design       |
| 🔗 Axios        | API communication                   |
| 🧭 React Router | Client-side navigation              |

## ⚙️ Backend

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| 🟢 Node.js    | JavaScript runtime              |
| 🚂 Express.js | Backend framework               |
| 🌐 REST API   | Frontend-backend communication  |
| 🛡️ CORS      | Cross-origin request handling   |
| ⚙️ dotenv     | Environment variable management |
| 🔄 Nodemon    | Development server monitoring   |

## 🍃 Database

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| 🍃 MongoDB       | NoSQL database          |
| ☁️ MongoDB Atlas | Cloud database hosting  |
| 🧩 Mongoose      | MongoDB object modeling |

## 🔐 Authentication & Security

| Technology                    | Purpose                                 |
| ----------------------------- | --------------------------------------- |
| 🔑 JWT                        | Authentication and protected API access |
| 🔒 bcrypt.js                  | Password hashing                        |
| 🛡️ Authentication Middleware | Protecting private routes               |

## 🧪 Development & Testing

| Tool                  | Purpose                 |
| --------------------- | ----------------------- |
| 💻 Visual Studio Code | Development environment |
| 📮 Postman            | API testing             |
| 📦 npm                | Package management      |
| 🐙 Git                | Version control         |
| 🌐 GitHub             | Source code hosting     |

---

# 🏛️ Application Architecture

```text
                         👤 USER
                           │
                           ▼
                  ⚛️ React Frontend
                           │
                         Axios
                           │
                           ▼
                  🚂 Express.js API
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       🔐 Authentication           🍽️ Food APIs
              │                         │
          JWT / bcrypt             CRUD / Search
              │                         │
              └────────────┬────────────┘
                           │
                           ▼
                    🧩 Mongoose
                           │
                           ▼
                    🍃 MongoDB Atlas
```

---

# 🔄 Application Workflow

```text
                         👤 USER
                           │
                           ▼
                   Open Food Genie
                           │
                           ▼
                 ⚛️ React Interface
                           │
                           ▼
                Register / Login
                           │
                           ▼
                  JWT Authentication
                           │
                           ▼
                   Food Discovery
                           │
                 ┌─────────┴─────────┐
                 │                   │
                 ▼                   ▼
             🔍 Search          🍽️ Browse
                 │                   │
                 └─────────┬─────────┘
                           │
                           ▼
                     Food Results
                           │
                           ▼
                  Food Information
                           │
                           ▼
                    User Experience
```

---

# 📂 Project Structure

```text
Food-Genie/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── layout/
│   │   │   └── ...
│   │   │
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── foodController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Food.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── foodRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore


```
# 🔐 Authentication Flow

Food Genie uses JWT-based authentication with bcrypt.js for password security.

text
User
 │
 ├── Register
 │      │
 │      ▼
 │   Express API
 │      │
 │      ▼
 │   bcrypt.js
 │      │
 │      ▼
 │   MongoDB
 │
 └── Login
        │
        ▼
   Express API
        │
        ├── bcrypt.js
        │
        ▼
      JWT
        │
        ▼
 Authentication Token
        │
        ▼
 Protected API Routes
```

Passwords are hashed before being stored in the database. The original password is not stored directly.

---

# 🍽️ Food API

Food Genie provides RESTful APIs for managing and discovering food items.

| Method   | Endpoint            | Purpose       | Authentication |
| -------- | ------------------- | ------------- | -------------- |
| `POST`   | `/api/foods`        | Add food      | 🔒 Required    |
| `GET`    | `/api/foods`        | Get all foods | Public         |
| `GET`    | `/api/foods/search` | Search foods  | Public         |
| `PUT`    | `/api/foods/:id`    | Update food   | 🔒 Required    |
| `DELETE` | `/api/foods/:id`    | Delete food   | 🔒 Required    |

### Authentication APIs

| Method | Endpoint             | Purpose                        |
| ------ | -------------------- | ------------------------------ |
| `POST` | `/api/auth/register` | Register a user                |
| `POST` | `/api/auth/login`    | Login a user                   |
| `GET`  | `/api/auth/profile`  | Get authenticated user profile |

---

# 🔌 API Data Flow

Food data is stored in MongoDB and dynamically delivered to the React frontend.

```text
MongoDB Atlas
     │
     ▼
Mongoose Food Model
     │
     ▼
Food Controller
     │
     ▼
Express REST API
     │
     ▼
Axios
     │
     ▼
React Frontend
     │
     ▼
Food Cards / Food Interface
```

This means food cards can be generated from real database records rather than hard-coded directly into the frontend.

---

# 🚀 Getting Started

Follow the steps below to run Food Genie locally.

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB Atlas account
* Git
* Visual Studio Code

---

## 1. Install Backend Dependencies

Open a terminal and navigate to the server directory:

```bash
cd server
npm install
```

---

## 2. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### ⚠️ Security Notice

Never upload your real `.env` file, MongoDB credentials, JWT secret, passwords, or other private credentials to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## 4. Start the Backend

Inside the `server` directory:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

## 5. Start the Frontend

Open another terminal and run:

```bash
cd client
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 📸 Application Preview

https://food-genie-taupe.vercel.app/

# 🎯 Project Objectives

The main objectives of Food Genie are:

* Build a practical full-stack MERN application.
* Develop a modern React-based frontend.
* Create RESTful APIs using Node.js and Express.js.
* Store application data using MongoDB Atlas.
* Implement secure user authentication.
* Use JWT for protected API access.
* Hash passwords securely using bcrypt.js.
* Implement food CRUD operations.
* Provide food search functionality.
* Connect the React frontend with backend APIs.
* Develop a responsive and user-friendly interface.
* Practice real-world full-stack development architecture.

---

# 📊 Skills Demonstrated

This project demonstrates practical experience in:

* ⚛️ React.js
* ⚡ Vite
* 🟨 JavaScript
* 🎨 HTML5 & CSS3
* 🔗 Axios
* 🧭 React Router
* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* ☁️ MongoDB Atlas
* 🧩 Mongoose
* 🔐 JWT Authentication
* 🔒 Password Hashing
* 🛡️ Authentication Middleware
* 🔗 REST API Development
* 🔄 CRUD Operations
* 🔍 API-based Search
* 📡 Frontend-Backend Integration
* 🧪 Postman API Testing
* 📦 npm
* 🐙 Git
* 🌐 GitHub
* 🏗️ Full-Stack Application Architecture
* 📱 Responsive Web Design

---

# 🧪 Testing

API endpoints are tested using **Postman**.

Testing includes:

* User registration
* User login
* JWT authentication
* Protected routes
* Food creation
* Food retrieval
* Food search
* Food updates
* Food deletion
* User profile access

---

# 🚀 Future Enhancements

Food Genie can be extended with additional features such as:

### 🤖 Smart Recommendations

* AI-powered food recommendations
* Personalized food suggestions
* Recommendation based on user preferences

### ❤️ Personalization

* Favorite foods
* Favorite recipes
* User-specific recommendations
* Enhanced user profiles

### 🔍 Advanced Discovery

* Advanced food filtering
* Ingredient-based search
* Cuisine-based filtering
* Preparation-time filtering

### 🥗 Nutrition

* Nutrition information
* Calorie information
* Ingredient analysis

### ⭐ Community Features

* Food ratings
* Reviews
* User feedback

### 🛒 Additional Utilities

* Ingredient-based shopping lists
* Recipe planning

### ☁️ Deployment

* Cloud deployment
* Production database configuration
* Production API hosting
* Frontend deployment

### 📱 Expansion

* Mobile application
* Multi-language support

---

# 🤝 Contributing

Contributions and suggestions are welcome.

1. Create a feature branch.
2. Make your changes.
3. Test your changes.
4. Commit your changes.
5. Push the branch.
6. Submit a Pull Request.

---

# 🔒 Security

Food Genie follows basic security practices including:

* Password hashing with bcrypt.js
* JWT-based authentication
* Protected API routes
* Environment variables for sensitive configuration
* CORS configuration
* `.env` exclusion through `.gitignore`

**Never commit sensitive credentials to the repository.**

---

# 📜 License

This project is developed for **educational and learning purposes**.

---

# 👩‍💻 Developed With

**Frontend:**
React.js • Vite • JavaScript • HTML5 • CSS3 • Axios • React Router

**Backend:**
Node.js • Express.js • REST APIs

**Database:**
MongoDB • MongoDB Atlas • Mongoose

**Authentication:**
JWT • bcrypt.js

**Testing:**
Postman

**Development Tools:**
Visual Studio Code • npm • Nodemon • Git • GitHub

---

# 🍽️ Food Genie

### **Discover It • Explore It • Cook It • Enjoy It**

A modern full-stack food discovery and recipe exploration platform built with the **MERN stack**.

---

⭐ **If you find this project interesting, feel free to explore the source code and follow its development.**

