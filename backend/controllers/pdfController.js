const { GetObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../config/awsConfig');

const streamPdfFromS3 = async ({ res, fileKey, downloadName }) => {
    const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
    });

    const response = await s3.send(command);

    res.setHeader('Content-Type', response.ContentType || 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${downloadName}"`);
    response.Body.pipe(res);
};

// Controller function to handle PDF download
const downloadPDF1 = async (req, res) => {
    try {
        // NOTE: The previous Google Drive "view" URL was returning 404 in server-to-server
        // downloads. For now we serve the S3-hosted PDF so the button always works.
        await streamPdfFromS3({
            res,
            fileKey: 'documents/chennai2bpl.pdf',
            downloadName: 'chennai2bpl.pdf',
        });
    } catch (error) {
        console.error('Error fetching the PDF:', error);
        res.status(500).send('Failed to download the file.');
    }
};

const downloadPDF2 = async (req, res) => {
    try {
        await streamPdfFromS3({
            res,
            fileKey: 'documents/chennai2bpl.pdf',
            downloadName: 'chennai2bpl.pdf',
        });
    } catch (error) {
        console.error('Error fetching the PDF:', error);
        res.status(500).send('Failed to download the file.');
    }
};

const downloadPDF3 = async (req, res) => {
    try {
        await streamPdfFromS3({
            res,
            fileKey: 'documents/SHF-Diwali-Welcome-Pack-2025.pdf',
            downloadName: 'SHF_Diwali_Welcome_Pack_2025.pdf',
        });
    } catch (error) {
        console.error('Error fetching the PDF:', error);
        res.status(500).send('Failed to download the file.');
    }
};

module.exports = { downloadPDF1, downloadPDF2, downloadPDF3 };