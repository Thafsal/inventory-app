Simple Inventory Management System (Express + MongoDB)
📌 Project Overview

A basic inventory management backend built using:

Express.js

Middleware

MongoDB + Mongoose

Postman for testing

📁 Folder Structure
inventory-system/
│── server.js
│── .env
│── package.json
│
├── models/
│   └── Item.js
│
└── routes/
    └── itemRoutes.js

🚀 How to Run
npm install
npm run dev

🔗 Environment Variables

.env file:

PORT=3000
MONGO_URI=your_mongodb_connection_string

🛠 API Endpoints
Root
Method	Endpoint	Description
GET	/	Check API status
GET	/health	Server health check
Items
Method	Endpoint	Description
POST	/items	Add a new item
GET	/items	Get all items