
const{Trip}=require('../database/models/index')


const postTrip = async(req,res)=>{
 const{riderid,driverid}=req.body
 console.log(req.body)
 const trips= await Trip.create({
     riderId:riderid,
     driverId:driverid
 })

 return res.status(200).json({trips})

}
const tripByStatus=async(req,res)=>{
const trips= await Trip.findAll({where:{status:"active"}})
res.status(200).json({trips})
res.status(400).json({"message":"there is no active trips"})
}

module.exports={
    postTrip,tripByStatus
}