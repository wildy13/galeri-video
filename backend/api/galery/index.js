const { Router } = require('express');
const { getGalery, createGalery } = require('./controller');

const router = new Router()

/* Router Get */
router.get('/', getGalery);


/* Router Post */
router.post('/', createGalery);



module.exports = router