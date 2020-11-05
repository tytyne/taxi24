const Joi = require('joi')

const idChecker ={
    params:{
        id:Joi.string().required(),
       
    }

}
module.exports=usernameChecker