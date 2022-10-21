const { Router } = require('express');
const { createUser, getuser, getMe, saveImage } = require('./controller');

const router = new Router();

/* Router Post */
router.post('/', createUser);
router.post('/picture', saveImage)
/* Router Get */
router.get('/', getuser);
router.get('/me', getMe);

module.exports = router;
