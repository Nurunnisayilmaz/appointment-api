const Booking = require('../models/bookingModel')
const Review = require('../models/reviewModel')
const Slider = require('../models/sliderModel')
const moment = require('moment')

const booking = async (req, res) => {
    const {name, email, phone, additionalMessage} = req.body;
    const date = new moment(req.body.date,"YYYY-MM-DD").format("YYYY-MM-DD");
    try {
        const data = await Booking({
            name,
            email,
            phone,
            date,
            additionalMessage
        })
        data.save();
        return res.status(200).json({status: 'success',data: data})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

const getAllSliderDatas = async (req, res) => {
    try {
        const allSlider = await Slider.find();
        return res.status(200).json({status: 'success',allSlider:allSlider})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}

const getAllReviews = async (req, res) => {

    try {
        const allReview = await Review.find();
        return res.status(200).json({status: 'success',allReview:allReview})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}

module.exports = {booking,getAllSliderDatas,getAllReviews};