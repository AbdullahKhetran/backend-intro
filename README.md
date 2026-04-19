# Backend Intro Project

A practice project for learning backend development fundamentals using Node.js, Express, and MongoDB built by following this [tutorial](https://youtu.be/KOutPbKc9UM?si=CqHJ665Thb04y0m7) 

## Live Backend
- Backend is [deployed](https://backend-intro-tkdv.onrender.com) using Render
- All APIs are public and published on Postman. Try them [here](https://www.postman.com/none77-2708/backend-intro/overview)

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for handling HTTP requests
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB 
- **Bcrypt** - Password hashing library
- **Dotenv** - Environment variable management 


## Setup to run locally

### Installation

1. Clone the repository
   ```
   git clone https://github.com/AbdullahKhetran/backend-intro
   ```
2. Change directory
   ```
   cd backend-intro
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy env file
   ```bash
   cp .env.example .env
   ```
5. Fill in environment variables in `.env`
   ```
   MONGODB_URI=your_mongodb_connection_string  
   PORT=4000  
   ```
6. Run the application
   - Dev mode: `npm run dev`
   - OR
   - Production mode: `npm start`


## API Endpoints

### Stauts
- `GET /` - Check live status

### User Management
- `POST /api/v1/users/register` - Register a new user 
- `POST /api/v1/users/login` - User login 
- `POST /api/v1/users/logout` - User logout 

### Post Management
- `POST /api/v1/posts/create` - Create a new post 
- `GET /api/v1/posts/getPosts` - Get all posts 
- `PATCH /api/v1/posts/updatePost/id` - Update a post by ID 
- `DELETE /api/v1/posts/deletePost/id` - Delete a post by ID 

## Project Structure

The project follows an MVC (Model-View-Controller) architecture pattern:

```
backend/src/
├── config/
│   ├── database.js         # Database connection configuration
│   └── constants.js        # Application constants
├── controllers/
│   ├── user.controller.js  # User related business logic
│   └── post.controller.js  # Post related business logic
├── models/
│   ├── user.model.js       # User schema and model
│   └── post.model.js       # Post schema and model
├── routes/
│   ├── user.route.js       # User API routes
│   └── post.route.js       # Post API routes
├── app.js                  # Express app configuration
└── index.js                # Server entry point
.env.example                # Environment variables template  
.gitignore                  # Git ignore patterns
package-lock.josn           # Dependency lock file
package.json                # Project metadata and scripts
README.md                   # Project documentation
```

## Key Features

### User Authentication
- Password hashing using bcrypt before saving to database 
- Password comparison for login validation 
- Email normalization to lowercase for consistency

### Data Validation
- User registration requires username, email, and password  
- Post creation requires name, description, and age fields 
- Post age validation between 1 and 150 

## Database Configuration

The application connects to MongoDB using the connection string from environment variables. The database name is set to `backend-intro`.

## Notes

This project uses ES modules (`import`/`export`) instead of CommonJS (`require`). All imports must include the `.js` file extension to resolve correctly.