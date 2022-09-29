const { Router } = require('express');
const { getCategory, createCategory } = require('./controller');

const router = new Router();

/* Router Get */
router.get('/', getCategory);

/* Router Post */
router.post('/', createCategory);

module.exports = router;