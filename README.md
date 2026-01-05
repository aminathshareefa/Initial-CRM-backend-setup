# Customer Relationship Management (CRM) Backend System

## Module End Assignment – Backend Development

This project is a **Backend Customer Relationship Management (CRM) system** developed as part of the **Module End Assignment (03)**.  
The backend is responsible for handling data storage, business logic, authentication, and RESTful APIs for CRM operations.

The application is built using **Node.js, Express.js, and MongoDB**, following proper backend architecture and best practices.

---

## 📌 Features

- User Authentication (Register & Login)
- Secure password hashing using bcrypt
- JWT-based authentication
- Customer Management (CRUD operations)
- Case / Assignment Management
- RESTful API design
- MongoDB database integration
- MVC folder structure
- Error handling with proper HTTP status codes

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **dotenv**
- **nodemon**
- **Postman** (for API testing)

---

## 📂 Project Structure

```

crm-backend/
│
├── app/
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication & error handling
│   └── services/        # Business services (if any)
│
├── config/              # Configuration files
├── tests/               # Test files (optional)
├── docs/                # Documentation
├── .env                 # Environment variables
├── server.js            # Entry point
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd crm-backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> ⚠️ Note: The `.env` file is not included in GitHub for security reasons.

---

### 4️⃣ Start the Server

```bash
npm run dev
```

Expected output:

```
MongoDB Connected
Server running on port 5000
```

---

## 🔗 API Endpoints

### 🔐 Authentication APIs

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

---

### 👤 Customer APIs

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/customers` | Get all customers     |
| POST   | `/api/customers` | Create a new customer |

---

### 📂 Case Management APIs

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/cases`     | Get all cases       |
| POST   | `/api/cases`     | Create a new case   |
| PATCH  | `/api/cases/:id` | Update case details |

---

## 🧪 API Testing

All APIs were tested using **Postman**.

### Example Request (Create Customer)

```json
POST /api/customers
{
  "name": "John Doe",
  "contact_info": "john@gmail.com",
  "status": "active"
}
```

### Example Request (Register User)

```json
POST /api/auth/register
{
  "username": "admin",
  "password": "admin123"
}
```

---

## ❗ Error Handling

* Try–catch blocks are used in controllers
* Proper HTTP status codes returned:

  * `200` – Success
  * `201` – Created
  * `400` – Bad Request
  * `500` – Server Error

---

## 🔒 Security Measures

* Passwords are encrypted using **bcrypt**
* JWT tokens are generated during login
* Sensitive information stored in environment variables

---

## 📌 Notes

* MongoDB credentials are environment-specific and therefore excluded from GitHub.
* The backend APIs were tested locally after environment configuration.
* The project follows proper backend development standards and clean code practices.

---

## ✅ Conclusion

This CRM backend system demonstrates a complete backend implementation with authentication, database integration, and RESTful APIs.
The project is structured for scalability, maintainability, and security, fulfilling all requirements of the module end assignment.

---

## 👤 Author

**Name:** *Aminath Shareefa*
**Course:** Backend Development
**Assignment:** Module End Assignment – 03
