
const {Trip}=require('../database/models/index')

//make a trip
const postTrip = async(req,res)=>{
 const{riderid,driverid}=req.body
 console.log(req.body)
 const trips= await Trip.create({
     riderId:riderid,
     driverId:driverid
 })

 return res.status(200).json({trips})

}
//complete a trip

const completeTrip = async(req,res)=>{
    
    const trip= await Trip.findOne({where:{id:req.params.id}}).then((trip)=>{
        trip.update({status:"complete"})
    })
    if(trips)
    return res.status(200).json({trips})
    return res.status(400).json({"message":"you can perform this operation"})

}

// available trip
const tripByStatus=async(req,res)=>{
const trips= await Trip.findAll({where:{status:"active"}})
res.status(200).json({trips})
res.status(400).json({"message":"there is no active trips"})
}

module.exports={
    postTrip,tripByStatus,completeTrip
}