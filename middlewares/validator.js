const createHttpError = require('http-errors')
//* Include joi to check error type 
const Joi = require('joi')
//* Include all validators
const Validators = require('../validations')

module.exports = function(validator) {
   
    if(!Validators.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator is not exist`)

    return async function(req, res, next) {
        try {
            const validated = await Validators[validator].validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            //* Pass err to next
            if(err.isJoi) 
                return next(createHttpError(422, {message: err.message}))
            next(createHttpError(500))
        }
    }
}
