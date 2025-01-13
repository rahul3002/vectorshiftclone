const express = require('express');
const router = express.Router();
const multer = require('multer');
const authenticateToken = require('../middlewares/auth');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', authenticateToken, upload.single('image'), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;