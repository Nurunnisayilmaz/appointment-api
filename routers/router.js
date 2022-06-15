const express = require('express');
const router = express.Router();

const {booking,getAllSliderDatas,getAllReviews} = require('../controllers/controller');

router.post('/booking', booking);
router.get('/photos', getAllSliderDatas);
router.get('/reviews', getAllReviews);

module.exports = router;