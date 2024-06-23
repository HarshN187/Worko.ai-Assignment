const userDao = require("../dao/userDao");
const UserDto = require("../dto/userDto");

const createUser = async (userData) => {
  const user = await userDao.createUser(userData);
  return new UserDto(user);
};

const getUserById = async (id) => {
  const user = await userDao.getUserById(id);
  return new UserDto(user);
};

const getAllUsers = async () => {
  const users = await userDao.getAllUsers();
  return users.map((user) => new UserDto(user));
};

const updateUser = async (id, updateData) => {
  const user = await userDao.updateUser(id, updateData);
  return new UserDto(user);
};

const deleteUser = async (id) => {
  const user = await userDao.deleteUser(id);
  return new UserDto(user);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
