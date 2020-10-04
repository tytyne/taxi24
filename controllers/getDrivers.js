const{Driver}=require('../database/models/index')


// all drivers
const allDrivers=async(req,res)=>{
    let drivers = await Driver.findAll()
    res.status(200).json({drivers})

    res.status(400).json({"message":"no drivers found"})

}
//get driver by id
const driverById = async(req,res)=>{
    let driver = await Driver.findOne({where:{id:req.params.id}})
    if(driver)
    res.status(200).json({driver})
    else res.status(400).json({"message":"THat driver can not be found"})
}
// where  driver status available

const driverByStatus= async(req,res)=>{
    let driver = await Driver.findAll({where:{status:"available"}})
    if(driver)res.status(200).json({driver})
    else res.status(400).json({"message":"there is not available driver"})
}

module.exports={
    allDrivers,driverById,driverByStatus
}
