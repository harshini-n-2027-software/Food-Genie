

# 🍽️ Food Genie

### Smart Food Discovery & Recipe Exploration Platform

**Discover It • Explore It • Cook It • Enjoy It**

Food Genie is a full-stack web application designed to make food discovery and recipe exploration simple, interactive, and enjoyable.

The platform allows users to discover food items, search by food name or ingredients, filter recipes by category, explore detailed recipe information, view ingredients and preparation steps, and interact with a modern responsive interface.

Food Genie is built using the **MERN stack** with a React and Vite frontend, Node.js and Express backend, MongoDB Atlas database, Mongoose data modeling, RESTful APIs, and JWT-based authentication.

---

# ✨ Key Features

## 🔐 User Authentication

* User registration
* User login
* Secure password hashing using **bcrypt.js**
* JWT-based authentication
* Protected API routes
* Authenticated user profile access
* User roles with `user` and `admin` support

The backend generates JWT tokens during login and protects private API operations using authentication middleware.

---

## 🍕 Food Discovery

* Browse food items dynamically from MongoDB
* Display food information using reusable recipe cards
* Browse food categories
* View food availability information
* View cooking time
* View calorie information
* View recipe difficulty
* View food images
* Open individual recipe details

Food records are stored using a dedicated Mongoose `Food` model containing food and recipe-related information such as ingredients and preparation steps.

---

## 🔍 Food Search & Filtering

Food Genie provides an interactive food discovery experience.

Users can:

* Search by food name
* Search by description
* Search using ingredients
* Search through the backend API by name or category
* Filter foods by category
* Clear searches and return to the complete food collection
* Receive loading and empty-result states

The Home page implements client-side ingredient/name/description matching and category filtering, while the backend also exposes a dedicated search endpoint.

### Available Categories

* All
* Starters
* Main Course
* Fast Food
* Rice & Noodles
* Beverages
* Desserts
* Healthy
* Snacks

---

## 🍽️ Recipe Details

Each recipe can be opened through a dedicated route:

```text
/recipe/:id
```

The recipe details page provides:

* Food image
* Recipe name
* Description
* Cooking time
* Calories
* Difficulty
* Ingredients
* Ingredient count
* Step-by-step preparation instructions
* Numbered preparation timeline
* Loading state
* Error state
* Back-to-recipes navigation

Recipe details are retrieved dynamically from the backend using the MongoDB food ID.

---

## ⭐ Top Recipes

Food Genie includes a dedicated **Top Recipes** page.

The current collection highlights:

* Chicken Biryani
* Margherita Pizza
* Creamy Pasta

These recipes are retrieved from the backend and linked to their individual recipe-detail pages.

---

## 🧩 Reusable React Components

The frontend uses reusable components including:

* Navbar
* RecipeCard
* Home page
* Top Recipes page
* Recipe Details page

Recipe cards dynamically display:

* Food image
* Category
* Name
* Description
* Cooking time
* Difficulty
* Calories
* View Recipe action

The card uses React Router navigation to open the corresponding recipe details page.

---

# 🏗️ Technology Stack

## 🎨 Frontend

| Technology          | Purpose                                 |
| ------------------- | --------------------------------------- |
| ⚛️ **React.js**     | Building the interactive user interface |
| ⚡ **Vite**          | Frontend development and build tool     |
| 🟨 **JavaScript**   | Application logic and functionality     |
| 🎨 **HTML5**        | Page structure                          |
| 🎨 **CSS3**         | Styling and responsive design           |
| 🔗 **Axios**        | Frontend-backend API communication      |
| 🧭 **React Router** | Client-side routing and navigation      |

The current frontend package includes React, React DOM, Axios, React Router DOM, Vite, and ESLint tooling.

---

## ⚙️ Backend

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| 🟢 **Node.js**    | JavaScript runtime environment              |
| 🚂 **Express.js** | Backend web framework                       |
| 🌐 **REST APIs**  | Communication between frontend and backend  |
| 🛡️ **CORS**      | Cross-origin request handling               |
| ⚙️ **dotenv**     | Environment variable management             |
| 🔄 **Nodemon**    | Automatic server restart during development |

The server uses Express middleware for CORS and JSON request parsing and exposes `/api/auth` and `/api/foods` routes.

---

## 🍃 Database

| Technology           | Purpose                                     |
| -------------------- | ------------------------------------------- |
| 🍃 **MongoDB**       | NoSQL application database                  |
| ☁️ **MongoDB Atlas** | Cloud-hosted MongoDB database               |
| 🧩 **Mongoose**      | Schema definition and MongoDB data modeling |

The application connects to MongoDB through Mongoose using the `MONGO_URI` environment variable.

---

## 🔐 Authentication & Security

| Technology                        | Purpose                                 |
| --------------------------------- | --------------------------------------- |
| 🔑 **JSON Web Token (JWT)**       | Authentication and protected API access |
| 🔒 **bcrypt.js**                  | Password hashing and verification       |
| 🛡️ **Authentication Middleware** | Protecting private API routes           |
| 🔐 **Environment Variables**      | Protecting configuration and secrets    |

Passwords are hashed using bcrypt.js before being stored, while JWT tokens are generated during login and verified by the authentication middleware.

---

## 🧪 Development & Testing

| Tool                      | Purpose                           |
| ------------------------- | --------------------------------- |
| 💻 **Visual Studio Code** | Development environment           |
| 📮 **Postman**            | REST API testing                  |
| 📦 **npm**                | Dependency and package management |
| 🔄 **Nodemon**            | Backend development workflow      |
| 🐙 **Git**                | Version control                   |
| 🌐 **GitHub**             | Source code hosting               |
| ▲ **Vercel**              | Frontend deployment               |
| ☁️ **Render**             | Backend deployment                |

---

# 🏛️ Application Architecture

```text
                         👤 USER
                           │
                           ▼
                  ⚛️ React Frontend
                           │
                     React Router
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
        JWT + bcrypt              CRUD + Search
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
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
        Browse Foods                 Search Foods
             │                           │
             │                    Name / Ingredients
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                    Filter by Category
                           │
                           ▼
                     Food Results
                           │
                           ▼
                    Recipe Card
                           │
                           ▼
                     View Recipe
                           │
                           ▼
                  /recipe/:id
                           │
                           ▼
                  Recipe Details
                    │            │
                    ▼            ▼
               Ingredients    Preparation
```

---

# 🔐 Authentication Workflow

```text
                    👤 USER
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
         Register              Login
             │                   │
             ▼                   ▼
       Express API          Express API
             │                   │
             ▼                   ▼
         bcrypt.js          bcrypt.js
             │                   │
             ▼                   ▼
         MongoDB                JWT
                                 │
                                 ▼
                        Authentication Token
                                 │
                                 ▼
                         Protected APIs
```

The login controller generates a JWT containing the user's ID, with a seven-day expiration, while protected routes require a valid `Bearer` token.

---

# 🍽️ Food API

Food Genie provides RESTful APIs for food discovery and management.

| Method   | Endpoint                 | Purpose               | Authentication |
| -------- | ------------------------ | --------------------- | -------------- |
| `POST`   | `/api/foods`             | Add a food            | 🔒 Required    |
| `GET`    | `/api/foods`             | Get all foods         | Public         |
| `GET`    | `/api/foods/:id`         | Get one food          | Public         |
| `GET`    | `/api/foods/search`      | Search foods          | Public         |
| `POST`   | `/api/foods/bulk`        | Add multiple foods    | 🔒 Required    |
| `PUT`    | `/api/foods/bulk-update` | Update multiple foods | 🔒 Required    |
| `PUT`    | `/api/foods/:id`         | Update a food         | 🔒 Required    |
| `DELETE` | `/api/foods/:id`         | Delete a food         | 🔒 Required    |

These routes correspond to the current Express food router and controller implementation.

---

# 🔑 Authentication API

| Method | Endpoint             | Purpose                        | Authentication |
| ------ | -------------------- | ------------------------------ | -------------- |
| `POST` | `/api/auth/register` | Register a user                | Public         |
| `POST` | `/api/auth/login`    | Authenticate a user            | Public         |
| `GET`  | `/api/auth/profile`  | Retrieve authenticated profile | 🔒 Required    |

The authentication routes are implemented under `/api/auth`.

---

# 🔌 API Data Flow

Food information flows from MongoDB to the React interface through the Express API.

```text
🍃 MongoDB Atlas
       │
       ▼
🧩 Mongoose Food Model
       │
       ▼
🎯 Food Controller
       │
       ▼
🚂 Express REST API
       │
       ▼
🔗 Axios
       │
       ▼
⚛️ React Frontend
       │
       ▼
🍽️ Recipe Cards
       │
       ▼
📖 Recipe Details
```

The Home page currently retrieves foods from the deployed backend and renders the returned MongoDB records as reusable `RecipeCard` components.

---

# 📂 Project Structure

```text
Food-Genie/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── RecipeCard.jsx
│   │   │   └── RecipeCard.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── TopRecipes.jsx
│   │   │   ├── TopRecipes.css
│   │   │   ├── RecipeDetails.jsx
│   │   │   └── RecipeDetails.css
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── index.html
│   ├── eslint.config.js
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
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

The current repository separates the React client from the Express server and follows a controller/model/route/middleware structure on the backend.

---

# 💻 Getting Started

Follow these steps to run Food Genie locally.

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB Atlas account
* Git
* Visual Studio Code

---

## 1. Clone the Repository

```bash
git clone https://github.com/harshini-n-2027-software/Food-Genie.git
cd Food-Genie
```

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### ⚠️ Security Notice

Never commit your real `.env` file, MongoDB credentials, JWT secret, passwords, or other sensitive configuration to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## 5. Start the Backend

Inside the `server` directory:

```bash
npm run dev
```

The development server runs on:

```text
http://localhost:5000
```

The server also supports:

```bash
npm start
```

for the normal Node.js production-style start command.

---

## 6. Start the Frontend

Inside the `client` directory:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

The client also provides production build and preview scripts through Vite.

---

# 🌐 Live Application

### 🚀 Frontend

**Food Genie Web Application**

[Open Food Genie Live Application](https://food-genie-taupe.vercel.app/)

### ⚙️ Backend

The frontend is configured to communicate with the deployed Food Genie backend hosted on Render.

---

# 🎯 Project Objectives

The main objectives of Food Genie are:

* Build a practical full-stack MERN application.
* Develop a modern React-based food discovery interface.
* Create RESTful APIs using Node.js and Express.js.
* Store application and recipe data using MongoDB Atlas.
* Implement secure user authentication.
* Use JWT for protected API access.
* Hash passwords using bcrypt.js.
* Implement food CRUD operations.
* Support bulk food creation and updates.
* Provide food search functionality.
* Implement category-based filtering.
* Display recipe details dynamically.
* Connect the React frontend with backend APIs.
* Create reusable React components.
* Develop a responsive and visually engaging interface.
* Practice real-world full-stack application architecture.
* Deploy the frontend and backend for real-world accessibility.

---

# 📊 Skills Demonstrated

This project demonstrates practical experience in:

### Frontend Development

* ⚛️ React.js
* ⚡ Vite
* 🟨 JavaScript
* 🎨 HTML5
* 🎨 CSS3
* 🧩 Component-based UI development
* 🧭 React Router
* 🔗 Axios
* 📱 Responsive interface development

### Backend Development

* 🟢 Node.js
* 🚂 Express.js
* 🌐 REST API development
* 🧩 MVC-style backend organization
* 🔄 CRUD operations
* 🔍 Search APIs
* 📦 Bulk data operations
* 🛡️ Middleware implementation

### Database

* 🍃 MongoDB
* ☁️ MongoDB Atlas
* 🧩 Mongoose
* 📋 Schema design
* 🔎 MongoDB queries

### Authentication & Security

* 🔐 JWT authentication
* 🔒 bcrypt.js password hashing
* 🛡️ Protected API routes
* 🔑 Bearer-token authentication
* ⚙️ Environment variables

### Development & Deployment

* 📮 Postman API testing
* 📦 npm
* 🔄 Nodemon
* 🐙 Git
* 🌐 GitHub
* ▲ Vercel
* ☁️ Render

---

# 🧪 Testing

API functionality can be tested using **Postman**.

Testing areas include:

### Authentication

* User registration
* Duplicate-user handling
* User login
* Password verification
* JWT generation
* Protected profile access
* Invalid-token handling

### Food Management

* Create food
* Retrieve all foods
* Retrieve a single food
* Search foods
* Update food
* Delete food
* Bulk food creation
* Bulk food updates

### Frontend

* Food API loading
* Loading states
* API error states
* Empty search results
* Category filtering
* Recipe card rendering
* Recipe detail navigation
* Recipe detail loading and error states

---

# 🔒 Security Practices

Food Genie implements several basic security practices:

* Password hashing with bcrypt.js
* JWT-based authentication
* Protected food-management routes
* Protected profile access
* Environment variables for sensitive configuration
* `.env` exclusion through `.gitignore`
* CORS configuration
* Password exclusion when retrieving the authenticated profile

The profile controller explicitly excludes the password field from the returned user document.

> **Important:** Never commit real database credentials, JWT secrets, passwords, or private environment variables to GitHub.

---

# 🚀 Deployment

Food Genie is structured as separately deployable frontend and backend applications.

### Frontend

* **Platform:** Vercel
* **Application:** Food Genie React client

### Backend

* **Platform:** Render
* **Application:** Food Genie Express API

The backend is configured to use the deployment-provided `PORT` environment variable and listen on `0.0.0.0`, which supports platforms such as Render.

---

# 🔮 Future Enhancements

The current application provides the core food discovery and recipe experience. Future versions can expand it with:

## 🤖 Intelligent Recommendations

* AI-powered food recommendations
* Personalized recipe suggestions
* Preference-based recommendations
* Recommendation ranking

## ❤️ Personalization

* Favorite foods
* Favorite recipes
* User-specific collections
* Enhanced user profiles

## 🔍 Advanced Discovery

* Advanced filtering
* Cuisine-based filtering
* Preparation-time filtering
* Difficulty filtering
* Ingredient-based recommendations

## 🥗 Nutrition

* Detailed nutrition information
* Calorie tracking
* Nutritional analysis
* Dietary preference filters

## ⭐ Community Features

* Food ratings
* Recipe reviews
* User feedback
* Community recipe sharing

## 🛒 Food Utilities

* Ingredient shopping lists
* Meal planning
* Recipe collections
* Grocery planning

## 📱 Platform Expansion

* Progressive Web App support
* Mobile application
* Multi-language support
* Additional deployment environments

---

# 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the changes.
5. Commit your changes.
6. Push the branch.
7. Open a Pull Request.

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

**Development & Testing:**
Visual Studio Code • npm • Nodemon • Postman

**Version Control:**
Git • GitHub

**Deployment:**
Vercel • Render

---

# 🍽️ Food Genie

### **Discover It • Explore It • Cook It • Enjoy It**

A modern full-stack food discovery and recipe exploration platform built with the **MERN stack**.

live demo : https://food-genie-taupe.vercel.app/

⭐ **Explore the project, discover recipes, and enjoy the Food Genie experience.**
