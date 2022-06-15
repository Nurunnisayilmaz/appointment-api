const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({

    name : {
        type: String,
        required: true
    },
    email : {
        type:String
    },
    phone : {
        type:String
    },
    date : {
        type:Date
    },
    additionalMessage : {
        type:String
    }

},{timestamps: false})

BookingSchema.index({additionalMessage: 'text'})

module.exports = mongoose.model('Booking', BookingSchema);