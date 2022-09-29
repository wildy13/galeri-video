const Role = require('./model');

const getRole = async (req, res) => {
  try {
    const roles = await Role.findAll({
      attributes: ['id', 'name'],
    });
    res.json(roles);
  } catch (error) {
    res.status(400).send(error);
  }
};

const inputRole = async (req, res) => {
  const { id, name } = req.body;
  try {
    const create = await Role.create({
      name,
    });
    res.json({ data: create, msg: "yeay role's in" });
  } catch (error) {
    if (id === Role.id) {
      res.status(400).send(error);
    }
  }
};

module.exports = {
  getRole, inputRole,
};
