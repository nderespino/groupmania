const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const upload = require('../middleware/multer');


router.get('/', async (req, res) => {
   const listOfPosts = await Post.findAll();
   res.send(listOfPosts);
  });

router.post('/', upload.single('file'), async (req, res) => {
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

module.exports = router;