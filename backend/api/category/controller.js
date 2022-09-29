const Category = require('./model');

const getCategory = async (req, res) => {
  try {
    const category = await Category.findAll({
      attributes: ['id', 'name'],
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new Category({
      name,
    });
    const category = await newCategory.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getCategory, createCategory };
