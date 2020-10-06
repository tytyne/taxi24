const {Rider}=require('../database/models/index')
const {Driver}=require('../database/models/index')
const Distance =require("geo-distance")


//all passengers
const allRiders=async(req,res)=>{

    var rider= await Rider.findAll()
    if(rider) res.status(200).json({rider})
    res.status(400).json({"message":"there no riders"})
}

//drivers close to the passenger

const closeToriders=async(req,res)=>{
    let drivers=await Driver.findAll()
    let closeDrivers=[]
    let newArray
    let rider= await Rider.findOne({where:{id:req.params.id}})
    if(rider){
    var lat=rider.latitude
    var long=rider.longitude
    drivers.forEach(element => {
        var specificRider={
            lat,
            long
        }

        var allDrivers={
            lat:element.latitude,
            long:element.longitude
        }

        var rangeDistance = Distance.between(specificRider, allDrivers);
    
        console.log('' + rangeDistance.human_readable());
        if (rangeDistance < Distance('2km')) {
            console.log('close');
            
            closeDrivers.push(element)
            newArray=closeDrivers.slice(0,3)  
        }
        if(closeDrivers.length == 0){
            return res.status(400).json({"message":"no close driver"})
        }
     
    });
    return res.status(200).json({newArray})
    }
    else
    {
        return res.status(400).json({"message":"there is no rider with that id"})
    }
 

    
}

// rider by ID
const riderById=async(req,res)=>{
    var rider= await Rider.findOne({where:{id:req.params.id}})
    if(rider)
    res.status(200).json({rider})
    res.status(400).json({"message":"there no rider with that id"})
    
}



module.exports={
    allRiders,riderById,closeToriders
}