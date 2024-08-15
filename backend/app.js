const express = require('express');
const multer = require('multer');
const User = require('./models/User');
const Post = require('./models/Post');
const cors = require('cors');

const app = express();
app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get('/posts', async (req, res) => {
  console.log("1");
  try {
    console.log("2");
    const posts = await Post.findAll();
    console.log("3");
    res.status(200).json(posts);
  } catch (error) {
    console.log("4");
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
});

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

// Route to get all posts


