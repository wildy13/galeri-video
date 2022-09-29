const { Router } = require('express');
const { createUser, getuser, getMe } = require('./controller');

const router = new Router();

/* Router Post */
router.post('/', createUser);

/* Router Get */
router.get('/', getuser);
router.get('/me', getMe);

module.exports = router;
