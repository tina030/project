var express = require('express');
var router = express.Router();

const { getAllMarkets, getMarketByID, getMarketArea } = require('../controllers/marketController');

router.get('/', getAllMarkets);

router.post('/findArea', getMarketArea);

router.post('/:id', getMarketByID);

module.exports = router;