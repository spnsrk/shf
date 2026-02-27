const express = require('express');
const { downloadPDF1, downloadPDF2, downloadPDF3 } = require('../controllers/pdfController');

const router = express.Router();

// Route to handle PDF download
router.get('/1', downloadPDF1);
router.get('/2', downloadPDF2);
router.get('/3', downloadPDF3);


module.exports = router;