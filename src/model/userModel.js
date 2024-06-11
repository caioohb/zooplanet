// src/models/userModel.js
let users = [];

const addUser = (user) => {
  users.push(user);
};

const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

const updateUser = (email, updatedData) => {
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    return true;
  }
  return false;
};

const deleteUser = (email) => {
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return true;
  }
  return false;
};

const getUsers = () => {
  return users;
};

module.exports = {
  addUser,
  findUserByEmail,
  updateUser,
  deleteUser,
  getUsers
};
