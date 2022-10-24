const User = require('./model');

const getuser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [
        'username',
      ],
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: [
        'username',
      ],
      where: {
        username: req.auth.username,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const {
    username,
    password,
    confPassword,
  } = req.body;

  try {
    const newUser = new User({
      username,
      password,
      confPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send(error.errors[0].message);
    } else {
      res.status(500).send(error);
    }
  }
};

const saveImage = async (imageDetail, res) => {
  const save = await User.images.create(imageDetail);
  res.status(200).json(save);
};

module.exports = {
  getuser, getMe, createUser, saveImage,
};
