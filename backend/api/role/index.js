const { Router } = require('express');
const {
  getRole, inputRole,
} = require('./controller');

const router = new Router();

// Get Router
router.get('/', getRole);

// POST Router
router.post('/', inputRole);

module.exports = router;
