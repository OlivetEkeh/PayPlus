// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock database
const users = [];

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

router.post('/forgot-password', (req, res) => {
  // Here you would implement sending a reset link or code
  res.json({ message: 'Reset link sent' });
});

module.exports = router;

