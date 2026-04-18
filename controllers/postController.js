const { Post } = require('../models');

// Get all 
const getAllPosts = async (request, response) => {
  try {
    const posts = await Post.findAll();
    response.json(posts);
  } catch (error) {
    response.status(500).json({ error: "Server error" });
  }
};

// Get one post
const getPostById = async (request, response) => {
  try {
    const post = await Post.findByPk(request.params.id);
    if (!post) return response.status(404).json({ error: 'Post not found' });
    response.json(post);
  } catch (error) {
    response.status(500).json({ error: "Server error" });
  }
};

// Create post
const createPost = async (request, response) => {
  try {
    const post = await Post.create(request.body);
    response.status(201).json(post);
  } catch (error) {
    response.status(500).json({ error: "Server error" });
  }
};

// Update post
const updatePost = async (request, response) => {
  try {
    const post = await Post.findByPk(request.params.id);
    if (!post) return response.status(404).json({ error: 'Post not found' });
    await post.update(request.body);
    response.json(post);
  } catch (error) {
    response.status(500).json({ error: "Server error" });
  }
};

// Delete post
const deletePost = async (request, response) => {
  try {
    const post = await Post.findByPk(request.params.id);
    if (!post) return response.status(404).json({ error: 'Post not found' });
    await post.destroy();
    response.json({ message: 'Post deleted successfully' });
  } catch (error) {
    response.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };