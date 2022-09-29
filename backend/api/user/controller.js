const User = require('./model');

const getuser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [
        'username',
        'fullName',
        'employeeNo',
        'email',
        'roleId',
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
        'fullName',
        'employeeNo',
        'email',
        'roleId',
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
    fullName,
    username,
    email,
    employeeNo,
    roleId,
  } = req.body;

  try {
    const newUser = new User({
      fullName,
      username,
      email,
      employeeNo,
      roleId,
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

module.exports = { getuser, getMe, createUser };
