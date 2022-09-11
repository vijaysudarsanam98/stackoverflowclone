
const { func } = require('joi');
const Joi = require('joi');



const userSchema = Joi.object({
    name: Joi.string().
        min(2).
        max(10).
        required(),
    email: Joi.string()
        .min(8)
        .max(256),
    password: Joi.string().
        min(3).
        max(30).
        required()

});

module.exports.createUserValidate = async function (inputData) {
    let message = ''

    let result = await userSchema.validate(inputData)
    if (result.error != null) {
        message = result.error.details[0].message.replace(/\"/g, '');
    }
    return message

}