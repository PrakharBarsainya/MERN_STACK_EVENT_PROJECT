# 🎉 Event Management Website

A full-stack **MERN Event Management Website** where users can explore different event planning services and send inquiries through a contact form.

The project uses **React.js** for the frontend, **Node.js and Express.js** for the backend, and **MongoDB with Mongoose** for storing customer inquiries.

The application is configured so that the frontend and backend can run together as a single application, making it suitable for deployment as one service on platforms such as Render.

---

## 📌 Project Overview

This project is designed as a simple and modern event management platform for showcasing event planning services and allowing potential customers to contact the service provider.

The website provides a clean user interface with different sections such as Home, Services, About, Contact, and Footer.

The most important full-stack functionality is the **Contact/Inquiry System**. When a user submits the contact form, the frontend sends the information to the backend API. The backend validates the information and stores the inquiry in MongoDB.

This demonstrates the complete communication flow between a React frontend, Express backend, and MongoDB database.

---

## ✨ Features

- Responsive event management website
- Hero section with booking call-to-action
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Event services showcase
- About section
- Contact information
- Google Maps integration
- Contact/inquiry form
- Frontend and backend validation
- Email validation
- Toast notifications for success and errors
- MongoDB database integration
- REST API for contact messages
- Mongoose schema validation
- CORS configuration
- Environment variable support
- Production build using Vite
- Single-service deployment support

### Available Services

- 🎂 Birthday Planning
- 💍 Anniversary Planning
- ⛺ Camping Trip Planning
- 🎮 Game Night Planning
- 🎉 Party Planning
- 💒 Wedding Planning

---

## 🛠️ Technologies Used

### Frontend

- **React.js** - Component-based user interface
- **Vite** - Frontend development and production build tool
- **Axios** - HTTP requests to the backend API
- **React Router DOM** - Routing support
- **React Scroll** - Smooth section navigation
- **React Icons** - Icons used in the interface
- **React Hot Toast** - Success and error notifications
- **CSS** - Website styling and responsive design

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - REST API and server framework
- **MongoDB** - Database for storing inquiries
- **Mongoose** - MongoDB object modeling and validation
- **CORS** - Cross-origin request configuration
- **Dotenv** - Environment variable management
- **Validator** - Email validation
- **Nodemon** - Automatic server restart during development

---

## 📂 Project Structure

```text
MERN_STACK_EVENT_PROJECT/
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controller/
│   │   └── messageController.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── models/
│   │   └── messageSchema.js
│   ├── router/
│   │   └── messageRouter.js
│   ├── app.js
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Services.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── package.json
└── README.md

---

## 🧩 Main Components

### Navbar

Provides the main website navigation:

- Home
- Services
- About
- Contact

It uses smooth scrolling and includes a hamburger menu for smaller screens.

### HeroSection

The main landing section of the website.

It contains the main introduction, event management message, background image, and a **Book Now** button that takes the user to the Contact section.

### Services

Displays the available event planning services using reusable React components and dynamically generated service data.

### About

Provides information about the event management service and the purpose of the business.

### Contact

The main interactive section of the project.

It contains:

- Business contact information
- Google Maps
- Contact form
- Form validation
- Axios API request
- Success/error notifications

### Footer

Contains the website branding and newsletter subscription interface.

---

## 🔄 How the Project Works

The frontend is built with React and provides the complete user interface.

When a visitor fills out the contact form and clicks the **Send** button, Axios sends the form data to the Express backend.

The complete flow is:

User → React Contact Form → Axios → Express API → Router → Controller → Mongoose → MongoDB → Response → Toast Notification

The main API endpoint is:

POST /api/v1/message/send

The contact form sends the following information:

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Wedding Planning",
  "message": "I would like to discuss my wedding event."
}

The backend checks the submitted data, validates it using the Mongoose schema, and stores the message in MongoDB if the data is valid.

After successfully saving the message, the backend sends a success response and the frontend displays a success toast.

If validation fails, the backend returns a meaningful error message and the frontend displays it to the user.

---

## 🔌 API

### Send Message

Endpoint:

POST /api/v1/message/send

Purpose:

Creates and stores a new customer inquiry in MongoDB.

Request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Wedding Planning",
  "message": "I would like to discuss my wedding event."
}

Successful response:

{
  "success": true,
  "message": "Message Sent Successfully!"
}

Validation errors return a `400` status, while unexpected server errors return a `500` status.

---

## 🗄️ Database

The project uses MongoDB with Mongoose.

Database name:

MERN_STACK_EVENT_MESSAGE

Each message contains:

- Name
- Email
- Subject
- Message

The backend validates:

- Name is required and must contain at least 3 characters.
- Email is required and must be a valid email.
- Subject is required and must contain at least 5 characters.
- Message is required and must contain at least 10 characters.

This prevents incomplete or incorrectly formatted inquiries from being stored in the database.

---

## ⚙️ Environment Variables

Create the following file:

backend/config/config.env

Add:

PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173

The actual MongoDB connection string should never be uploaded to GitHub.

For deployment, the environment variables are configured directly in the hosting platform.

---

## 🚀 Installation

Clone the repository:

git clone https://github.com/PrakharBarsainya/MERN_STACK_EVENT_PROJECT.git

Move into the project:

cd MERN_STACK_EVENT_PROJECT

Install frontend and backend dependencies:

npm run install-all

Configure your MongoDB connection inside:

backend/config/config.env

---

## 💻 Run Locally

### Development

Start the backend:

cd backend
npm run dev

The backend runs on:

http://localhost:4000

Start the frontend in another terminal:

cd frontend
npm run dev

The frontend runs using the Vite development server.

The frontend and backend can therefore be developed independently while still communicating through the REST API.

### Production Test

From the project root, create the frontend production build:

npm run build

Then start the application:

npm start

Open:

http://localhost:4000

In production mode, Express serves the React production build from `frontend/dist` and also handles the backend API.

---

## 🌐 Deployment

The project is designed to be deployed as **one Render Web Service**, so the frontend and backend do not need to be deployed separately.

### Render Settings

Root Directory:

.

Build Command:

npm run build

Start Command:

npm start

### Render Environment Variables

Add:

MONGO_URI=your_mongodb_connection_string

Also configure:

FRONTEND_URL=https://event-management-nhff.onrender.com

Render provides the `PORT` value automatically.

The production flow is:

User → Render → Express Server → React Frontend / REST API → MongoDB

The same deployed server handles both the React application and backend API, which keeps the deployment simple and avoids maintaining separate frontend and backend hosting services.

---

## 🔐 Security

Sensitive information should never be committed to GitHub.

Recommended `.gitignore` entries:

node_modules/
frontend/node_modules/
backend/node_modules/
frontend/dist/
backend/config/
.env
.env.local

Keep MongoDB credentials, passwords, API keys, and other secrets private.

The production MongoDB connection string is configured through Render environment variables instead of being stored in the GitHub repository.

---

## 📦 Available Scripts

### Root

npm run install-all
npm run build
npm start

### Backend

npm run dev
npm start

### Frontend

npm run dev
npm run build
npm run lint
npm run preview

---

## 🧪 Testing

Before deployment, the following functionality was tested:

- Frontend loads correctly
- Navigation and smooth scrolling work
- Services are displayed correctly
- Contact form accepts user information
- Backend API receives contact requests
- MongoDB connection works
- Messages are stored in MongoDB
- Validation errors are handled
- Success/error toast notifications work
- Production build completes successfully
- Full application works after Render deployment

---

## 🔮 Future Improvements

Possible future improvements include:

- Admin dashboard
- Admin authentication and authorization
- Complete event booking system
- Event availability and date management
- Online payment integration
- Email notifications
- Functional newsletter subscription
- Event gallery
- Customer testimonials
- Cloud image uploads
- CAPTCHA and spam protection
- SEO improvements
- Better mobile optimization
- Booking and quotation management

---

## 🌍 Live Demo

The project is currently deployed and available at:

https://event-management-nhff.onrender.com

---

## 💻 GitHub Repository

Source code is available on GitHub:

https://github.com/PrakharBarsainya/MERN_STACK_EVENT_PROJECT

---

## 📌 Project Status

Frontend: ✅ Completed
Backend: ✅ Completed
MongoDB: ✅ Integrated
Contact API: ✅ Completed
Local Testing: ✅ Working
Production Build: ✅ Working
Render Deployment: ✅ Live

---

## 👨‍💻 Author

**Prakhar Barsainya**

Built with the MERN Stack.
