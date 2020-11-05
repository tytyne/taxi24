const Joi = require('joi')

const validate = (req) => {
    const username=Joi.object({
        usernameDriver:Joi.string().required(),
        usernameRider:Joi.string().required()
    })
return username.validate(req)
}
module.exports=validate