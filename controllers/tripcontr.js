
const {Trip}=require('../database/models/index')
const {Driver}=require('../database/models/index')
const {Rider}=require('../database/models/index')
//make a trip
const postTrip = async(req,res)=>{

try{
const{usernameRider,usernameDriver}=req.body
const driver= await Driver.findOne({where:{username:usernameDriver,status:"available"}})
const rider= await Rider.findOne({where:{username:usernameRider}})
console.log(driver)
console.log(rider)
if(rider && driver)
 var trips= await Trip.create({
     riderId:rider.id,
     driverId:driver.id
 })
 driver.status="unavailable";
 await driver.save();
 
 return res.status(200).json({trips})
}
catch(err){
    console.log(err, req.body.riderId);
    console.log(err,req.body.driverId)
    return res.status(400).json({message:"either driver or rider do  not exist"})

}


}

//complete a trip

const completeTrip = async(req,res)=>{
    
    try{ 
    const trip = await Trip.update({status:"complete"},{where:{id:req.params.id}})
    console.log(trip)
    if(trip)

    return res.status(200).json({trip})
    }
    catch(err){
        return res.status(400).json({message:"that trip doesn't exist"})
    }
    
    

}

// available active trips

const tripByStatus=async(req,res)=>{

try{
    const trips= await Trip.findAll({where:{status:"active"}})
    if(trips) 
    return res.status(200).json({trips})
}
catch(err){
    return res.status(400).json({"message":"there is no active trips"})
}

}

module.exports={
    postTrip,tripByStatus,completeTrip
}