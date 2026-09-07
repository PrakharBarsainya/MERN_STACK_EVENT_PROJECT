# 🎉 Event Management Website

A full-stack **MERN Event Management Website** where users can explore different event planning services and send inquiries through a contact form.

The project uses **React.js** for the frontend, **Node.js and Express.js** for the backend, and **MongoDB with Mongoose** for storing customer inquiries.

The application is configured so that the frontend and backend can run together as a single application, making it suitable for deployment as one service on platforms such as Render.

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
- Toast notifications for success and errors
- MongoDB database integration
- REST API for contact messages
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

- React.js
- Vite
- Axios
- React Router DOM
- React Scroll
- React Icons
- React Hot Toast
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv
- Validator
- Nodemon

---

## 📂 Project Structure

MERN_STACK_EVENT_PROJECT/
│
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

## 🔄 How the Project Works

The frontend is built with React and provides the complete user interface.

When a visitor fills out the contact form and clicks the Send button, Axios sends the form data to the Express backend.

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

---

## ⚙️ Environment Variables

Create the following file:

backend/config/config.env

Add:

PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173

The actual MongoDB connection string should never be uploaded to GitHub.

---

## 🚀 Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

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

### Production Test

From the project root, create the frontend production build:

npm run build

Then start the application:

npm start

Open:

http://localhost:4000

In production mode, Express serves the React production build from frontend/dist and also handles the backend API.

---

## 🌐 Deployment

The project is designed to be deployed as one Render Web Service, so the frontend and backend do not need to be deployed separately.

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

FRONTEND_URL=https://YOUR-RENDER-APP.onrender.com

Render provides the PORT value automatically.

The production flow is:

User → Render → Express Server → React Frontend / REST API → MongoDB

---

## 🔐 Security

Sensitive information should never be committed to GitHub.

Recommended .gitignore entries:

node_modules/
frontend/node_modules/
backend/node_modules/
frontend/dist/
backend/config/config.env
.env
.env.local

Keep MongoDB credentials, passwords, API keys, and other secrets private.

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

After deployment, add the Render URL here:

https://YOUR-RENDER-APP.onrender.com

---

## 💻 GitHub Repository

Add your GitHub repository URL here:

https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

---

## 📌 Project Status

Frontend: ✅ Completed
Backend: ✅ Completed
MongoDB: ✅ Integrated
Contact API: ✅ Completed
Local Testing: ✅ Working
Production Build: ✅ Working
Render Deployment: 🚀 Ready

---

## 👨‍💻 Author

Prakhar Barsainya

Built with the MERN Stack.
