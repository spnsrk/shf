const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../config/awsConfig');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    // Bucket has ACLs disabled (Object Ownership enforced).
    // Do not set ACL on upload; serve via backend streaming endpoints instead.
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${Date.now().toString()}-${file.originalname}`);
    },
  }),
});

module.exports = upload;