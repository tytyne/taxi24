const {Driver} =require('../database/models/index')
var Distance=require('geo-distance')
const validate=require('../validators/locationValidator')
// all drivers
const allDrivers=async(req,res)=>{
    let drivers = await Driver.findAll()
    res.status(200).json({drivers})

   return res.status(400).json({"message":"no drivers found"})

}
// where  driver available drivers

const driverByStatus= async(req,res)=>{
    let drivers = await Driver.findAll({where:{status:"available"}})
    if(drivers)
    return res.status(200).json({drivers})
    else
    return res.status(400).json({"message":"there is not available driver"})
}

// all drivers
const all=async(req,res)=>{
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let listOfDrivers = await Driver.findAll({where:{status:"available"}})
    
    let{lat,long}=req.body;
    let drivers =[]
    if(listOfDrivers){
        listOfDrivers.forEach(element => {
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
                drivers.push(element)     
                }
                if(drivers.length == 0){
                  
                return  res.status(400).json({"message":"no drivers available in 3km"})  
                }
               
               
        });
    return res.status(200).json({drivers})
 
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

module.exports={
    allDrivers,driverById,driverByStatus,all
}
