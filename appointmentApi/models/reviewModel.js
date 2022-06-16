const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    review : {
        type: String,
        required: true
    }

},{timestamps: false})

ReviewSchema.index({review: 'text'})

module.exports = mongoose.model('Review', ReviewSchema);