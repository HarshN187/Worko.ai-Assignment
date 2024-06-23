// test/user.test.js

const request = require("supertest");
const express = require("express");
const userRoutes = require("../routes/userRoutes");
const connectDB = require("../config/dbConfig");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();
app.use(express.json());
app.use("/api", userRoutes); // Mount your userRoutes

describe("User API", () => {
  let userId; // To store the user id created during tests

  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("should create a new user", async () => {
    const response = await request(app).post("/api/worko/user").send({
      email: "test@example.com",
      name: "Test User",
      age: 30,
      city: "Test City",
      zipCode: "12345",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    userId = response.body.id; // Store the user id for subsequent tests
  });

  test("should fetch details of a user", async () => {
    // Fetch user details using the userId
    const fetchUserResponse = await request(app).get(
      `/api/worko/user/${userId}`
    );

    expect(fetchUserResponse.statusCode).toBe(200);
    expect(fetchUserResponse.body).toHaveProperty("email", "test@example.com");
    expect(fetchUserResponse.body).toHaveProperty("name", "Test User");
  });

  test("should update a user", async () => {
    // Update user details
    const updateUserResponse = await request(app)
      .put(`/api/worko/user/${userId}`)
      .send({
        name: "Updated Test User",
        city: "Updated City",
      });

    expect(updateUserResponse.statusCode).toBe(200);
    expect(updateUserResponse.body).toHaveProperty("name", "Updated Test User");
    expect(updateUserResponse.body).toHaveProperty("city", "Updated City");
  });

  test("should delete a user", async () => {
    const response = await request(app).delete(`/api/worko/user/${userId}`);
    expect(response.statusCode).toBe(200);
    const deletedUserResponse = await request(app).get(
      `/api/worko/user/${userId}`
    );
    expect(deletedUserResponse.statusCode).toBe(200);
    expect(deletedUserResponse.body).toHaveProperty("isActive", false); 
  });
});
