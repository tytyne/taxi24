const Joi = require('joi')

const validate = (req) => {
    const location=Joi.object({
        lat:Joi.number().required(),
        long:Joi.number().required()
    })
return location.validate(req)
}
module.exports=validate