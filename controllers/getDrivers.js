const {Driver} =require('../database/models/index')
var Distance=require('geo-distance')

// all drivers
const allDrivers=async(req,res)=>{
    let drivers = await Driver.findAll()
    res.status(200).json({drivers})

    res.status(400).json({"message":"no drivers found"})

}

// all drivers
const all=async(req,res)=>{
    let drivers = await Driver.findAll()
    let{lat,long}=req.body;
    let kmRange =[]
    if(drivers){


        drivers.forEach(element => {
            var specificLocation={
                lat,
                long
            }
            var specificDriver={
                lat:element.latitude,
                long:element.longitude,
            }
    
            var rangeDistance = Distance.between(specificLocation, specificDriver);
    
                console.log('' + rangeDistance.human_readable());
                if (rangeDistance < Distance('3km')) {
                console.log('close');
                kmRange.push(element)
                    return res.status(200).json({kmRange})
                    
                }
                return  res.status(400).json({"message":"no drivers found"}) 
            
        });
 
    }
    else{

   return  res.status(400).json({"message":"no driver with that id"})
    }

}
//get driver by id
const driverById = async(req,res)=>{
    let driver = await Driver.findOne({where:{id:req.params.id}})
    if(driver)
    return res.status(200).json({driver})
   
    return res.status(400).json({"message":"THat driver can not be found"})
}
// where  driver status available

const driverByStatus= async(req,res)=>{
    let driver = await Driver.findAll({where:{status:"available"}})
    if(driver)
    return res.status(200).json({driver})
    else
    return res.status(400).json({"message":"there is not available driver"})
}

module.exports={
    allDrivers,driverById,driverByStatus,all
}
