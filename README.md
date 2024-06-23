# Worko.ai-Assignment
 
# Node.js MVC API

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

    DB_URI=mongodb://localhost:27017/nodejs-mvc-api
    JWT_SECRET=your_jwt_secret_key


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

### Running Tests

    npm test

### Built With
    Express
    Mongoose
    Joi
    JWT
    Supertest
