const sequelize = require('./database');
const User = require('./models/User');
const Post = require('./models/Post');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true }); 
    await sequelize.sync({ alter: true });// This will drop existing tables and re-create them
    console.log('Database synchronized.');

    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();