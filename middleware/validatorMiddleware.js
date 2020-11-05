const usernameValidator=require('../validators/usernameValidator')


const validateUsername=function(req,res,next){
    const{usernameDriver,usernameRider}=req.body;
    const vld=usernameValidator.validate({usernameDriver,usernameRider})
    if(vld.error){
      
        return  res.status(400).send(vld.error.details[0].message);  
    }

return next();
}
module.exports=validateUsername
