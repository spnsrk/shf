const express = require('express');
const { fetchPDF } = require('../controllers/proxyController');

const router = express.Router();

// Route to fetch and stream a PDF
router.get('/proxy/pdf', fetchPDF);

module.exports = router;
