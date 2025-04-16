const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();
const SECRET_KEY = 'test';

// Registration Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user: newUser.username });
  } catch (error) {
    res.status(500).json({ message: 'Registration error', error });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error });
  }
});

module.exports = router;
