const { User } = require('../models');

// Get all 
const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    response.json(users);
  } catch (error) {
    response.status(500).json({ error : "Server error" });
  }
};

// Get one user
const getUserById = async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    if (!user) return response.status(404).json({ error: 'User not found' });
    response.json(user);
  } catch (error) {
    response.status(500).json({ error : "Server error" });
  }
};

// Create user
const createUser = async (request, response) => {
  try {
    const user = await User.create(request.body);
    response.status(201).json(user);
  } catch (error) {
    response.status(500).json({  error : "Server error"  });
  }
};

// Update user
const updateUser = async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    if (!user) return response.status(404).json({ error: 'User not found' });
    await user.update(request.body);
    response.json(user);
  } catch (error) {
    response.status(500).json({  error : "Server error"  });
  }
};

// Delete user
const deleteUser = async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    if (!user) return response.status(404).json({ error: 'User not found' });
    await user.destroy();
    response.json({ message: 'User deleted successfully' });
  } catch (error) {
    response.status(500).json({  error : "Server error" });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };