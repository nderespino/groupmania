const sequelize = require('./database');
const User = require('./models/User');
const Post = require('./models/Post');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true }); // This will drop existing tables and re-create them
    console.log('Database synchronized.');

    // Create a default user
    const user = await User.create({
      username: 'defaultuser',
      email: 'default@example.com',
      password: 'password123',
    });

    // Create a default post
    const post = await Post.create({
      user_id: user.id,
      content: 'Hello, world!',
      image_url: 'http://example.com/image.png',
    });

    console.log('Default user and post created.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();