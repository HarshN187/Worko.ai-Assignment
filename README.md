# Worko.ai-Assignment
 
# Project Overview

This project implements a User API with CRUD operations using Express.js and MongoDB. The API includes endpoints for creating, reading, updating, and deleting users.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
   
    git clone https://github.com/your-repo/nodejs-mvc-api.git

2. Install NPM packages

    npm install

3. Create a .env file in the root directory and add the following:

    DB_URI=mongodb+srv://harsh:A5k7J0YhOfzvgaeO@cluster0.2ny6svi.mongodb.net/worko-ai
    JWT_SECRET=your_jwt_secret_key
    PORT=5000

    BASIC_AUTH_USER=admin
    BASIC_AUTH_PASSWORD=secret


### Usage
1. Start the server

    npm start

2. API Endpoints:

    GET /api/worko/user - List all users
    GET /api/worko/user/:userId - Get user details
    POST /api/worko/user - Create a new user
    PUT /api/worko/user/:userId - Update a user
    PATCH /api/worko/user/:userId - Partially update a user
    DELETE /api/worko/user/:userId - Soft delete a user

### Testing Strategy
Tests are written using Jest and Supertest to verify:

User creation
Fetching user details
Updating user information
Deleting a user

### Running Tests

    npm test

### Built With
    Express
    Mongoose
    Joi
    JWT
    Supertest
