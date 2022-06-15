const express = require('express');
const router = express.Router();


const {booking,getAllPhotos,getAllComments} = require('../controllers/controller');

router.post('/booking', booking);
router.get('/photos', getAllPhotos);
router.get('/comments', getAllComments);

module.exports = router;