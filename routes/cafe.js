var express = require('express');
var router = express.Router();

const { getAllCafes, getCafeByID, getCafeArea } = require('../controllers/cafeController');

router.get('/', getAllCafes);

router.post('/findArea', getCafeArea);

router.post('/:id', getCafeByID);

module.exports = router;