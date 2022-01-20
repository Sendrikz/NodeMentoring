
const Joi = require('joi');

module.exports = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string()
                .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
                .message('"password" must contain letters and numbers')
                .required(),
    age: Joi.number().integer()
            .min(4).max(130)
            .required()
});