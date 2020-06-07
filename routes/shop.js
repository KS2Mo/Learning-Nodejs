const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
/* GET users listing. */
router.get('/',shopController.index);
router.get('/menu',shopController.menu);

module.exports = router;
