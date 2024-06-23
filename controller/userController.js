const userService = require("../services/userService");

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller function to get all users
const listUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller function to get user by ID
const getUserDetails = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller function to update user by ID
const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller function to partially update user by ID
const patchUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller function to delete user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserDetails,
  updateUser,
  patchUser, // Make sure to export patchUser
  deleteUser,
};
