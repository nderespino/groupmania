const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET:', JWT_SECRET);


module.exports.signup = (req, res) => {
  const { email, password, username } = req.body;
console.log(req.body);
  if (!email || !password || !username) {
    return res.status(400).json({ message: "credentials not valid" });
  }

  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw res
        .status(500)
        .json({ message: "something went wrong with Bcrypt hashing" });
    }
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw res
          .status(500)
          .json({ message: "something went wrong with creating a new user" });
      }
      const user = new User({ email, password: hash, salt, username });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user was successfully created" });
        })
        .catch((e) => {
          res.status(500).json({
            message: "something went wrong with creating a new user",
          });
          console.log("error", e);
        });
    });
  });
};

module.exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username or password not present" });
  }

  User.findOne({ where: { username } })  // Corrected syntax
    .then((user) => {
      if (!user) {
        return res.status(500).json({ message: "Login not successful" });
      }

      bcrypt.compare(password, user.password, (err, match) => {
        if (err) {
          return res.status(500).json({ message: "Something went wrong with Bcrypt comparison" });
        }

        if (match) {
          const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
          return res.status(200).json({ message: "Login successful", userId: user.id, token });
        } else {
          return res.status(401).json({ message: "Invalid username or password" });
        }
      });
    })
    .catch((e) => {
      res.status(500).json({ message: "Something went wrong with finding the user" });
      console.log("error", e);
    });
};


module.exports.authorize = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Access Denied: Invalid token" });
    }

    req.user = decoded;  // Set decoded user object from JWT
    req.userId = decoded.userId;  // Set userId from decoded JWT
    next();
  });
};



