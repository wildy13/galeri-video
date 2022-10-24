const Galery = require('./model');

const getGalery = async (req, res) => {
  try {
    const galery = await Galery.findAll({
      attributes: ['id', 'title', 'description', 'video', 'createdBy', 'categoryId'],
    });
    res.status(200).json(galery);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createGalery = async (req, res) => {
  const {
    titile, description, video, createdBy, categoryId,
  } = req.body;
  try {
    const newGalery = new Galery({
      titile, description, video, createdBy, categoryId,
    });
    const galery = await newGalery.save();
    res.status(200).json(galery);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getGalery, createGalery };
