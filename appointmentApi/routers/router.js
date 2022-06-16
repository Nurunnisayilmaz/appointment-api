const express = require('express');
const router = express.Router();

const {booking,getAllSliderDatas,getAllReviews} = require('../controllers/controller');
const {bookingValidate} = require('../middlewares/bookingValidation');

router.post('/booking',bookingValidate(), booking);
router.get('/photos', getAllSliderDatas);
router.get('/reviews', getAllReviews);

module.exports = router;