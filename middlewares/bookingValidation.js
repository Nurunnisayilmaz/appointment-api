const Joi = require('joi');


const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    date:Joi.date().required(),
    additionalMessage:Joi.string().required()
}).unknown(true);

const bookingValidate = () => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        if (result.error) {
            return res.status(400).json({code: 400, message: 'Invalid Input', error: result.error.details})
        }
        next();
    }
}


module.exports = {bookingValidate}