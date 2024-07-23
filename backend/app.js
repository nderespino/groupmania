const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const User = require('./models/User');
const Post = require('./models/Post');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/create-post', upload.single('file'), async (req, res) => {
  try {
    const { content } = req.body;
    const file = req.file;

    // Create a new post
    const post = await Post.create({
      user_id: 1, // Replace with actual user ID
      content,
      image_url: file ? file.path : null,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});