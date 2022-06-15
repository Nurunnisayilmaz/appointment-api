const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SliderSchema = new Schema({

    url : {
        type: String,
        required: true
    }

},{timestamps: false})


module.exports = mongoose.model('Slider', SliderSchema);