const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/token', (req, res) => {
    const payload = { user: { id: 'user123' } }; // Example user ID
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
