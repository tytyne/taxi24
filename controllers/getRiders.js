const {Rider}=require('../database/models/index')

//all riders
const allRiders=async(req,res)=>{
    var rider= await Rider.findAll()
    if(rider) res.status(200).json({rider})
    res.status(400).json({"message":"there no riders"})
}


// rider by ID
const riderById=async(req,res)=>{
    var rider= await Rider.findOne({where:{id:req.params.id}})
    if(rider)
    res.status(200).json({rider})
    res.status(400).json({"message":"there no rider with that id"})
    
}

module.exports={
    allRiders,riderById
}