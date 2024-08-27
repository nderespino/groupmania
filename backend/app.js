const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const postRouter = require('./routes/posts');
const userRouter = require('./routes/user')
app.use('/posts', postRouter);
app.use('/', userRouter);
app.use('/uploads', express.static('uploads'))

module.exports = app;




