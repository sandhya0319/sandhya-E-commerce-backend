const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    name: Joi.string().min(1).required(),
    password: Joi.string().min(4).required(),
    mobile: Joi.number().min(10).max(10).required(),
    gender:  Joi.string().required(),
    type : Joi.string().valid('male','female','other'),
});

module.exports = registerSchema;    