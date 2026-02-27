const axios = require('axios');

const fetchPDF = async (req, res) => {
    try {
        const pdfUrl = req.query.url; // Get the PDF URL from the query parameter
        if (!pdfUrl) {
            return res.status(400).json({ error: 'Missing PDF URL in the request.' });
        }

        // Fetch the PDF from the provided URL
        const response = await axios.get(pdfUrl, { responseType: 'stream' });

        // Set the appropriate headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline');

        // Pipe the PDF stream to the client
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching PDF:', error.message);
        res.status(500).json({ error: 'Failed to fetch PDF. Please try again.' });
    }
};

module.exports = {
    fetchPDF,
};
