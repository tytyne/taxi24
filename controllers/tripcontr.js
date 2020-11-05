
const { Trip } = require('../database/models/index')
const { Driver } = require('../database/models/index')
const { Rider } = require('../database/models/index')
const {Invoice} = require('../database/models/index')
const validate=require('../validators/usernameValidator')
//make a trip
const postTrip = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {

        const { usernameRider, usernameDriver } = req.body
        const driver = await Driver.findOne({ where: { username: usernameDriver } })
        const rider = await Rider.findOne({ where: { username: usernameRider } })

        if (!(driver || rider)) return res.status(400).json({ message: "either driver or rider do  not exist" })
        if (driver.status !== "available") return res.status(400).json({ message: "The driver is not available" })
        if (rider.status === "active") return res.status(400).json({ message: "The rider is not allowed to create a trip" })

        var trips = await Trip.create({
            riderId: rider.id,
            driverId: driver.id
        })
        const driverUpdate = await Driver.update({ status: "unavailable" }, { where: { id: driver.id }, returning: true })
        const riderUpdate = await Rider.update({ status: "unactive" }, { where: { id: rider.id }, returning: true })
        console.log(driverUpdate[1][0].dataValues)
        console.log(riderUpdate)
        return res.status(200).json({ trips })
    }
    catch (err) {
        console.log(err, req.body.riderId);
        console.log(err, req.body.driverId)
        return res.status(500).json({ message: "internal error" })

    }


}

//complete a trip

const completeTrip = async (req, res) => {

    try {

        const rider = await Rider.findOne({ where: { id: req.params.riderId } })
        if (!rider) return res.status(404).json({ message: "rider not found" })
        if (rider.status !== 'active') return res.status(404).json({ message: "You do not have an active trip" })

        const trip = await Trip.update({ status: "complete" }, { returning: true, where: { id: req.params.id, riderId: req.params.riderId }, })

        if (trip[0] === 0) return res.status(404).json({ message: "the trip doesn't exist" })

        const driverUpdate = await Driver.update({ status: "available" }, { where: { id: trip[1][0].dataValues.driverId }, returning: true })
        const riderUpdate = await Rider.update({ status: "unactive" }, { where: { id: rider.id }, returning: true })
        const invoice= await Invoice.create({tripId:trip[1][0].dataValues.id})
       
        const invoices={
            message:`Thank you ${rider.name} for using our services`,
            startedAt:trip[1][0].dataValues.createdAt,
            completedAt:trip[1][0].dataValues.updatedAt,
            
        }

        return res.status(200).json(invoices)
    }
    catch (err) {
        return res.status(500).json({ message: "Internal error" })
    }



}

// available active trips

const tripByStatus = async (req, res) => {

    try {
        const trips = await Trip.findAll({ where:{ status: "active"} })
        if (trips.length === 0) return res.status(400).json({ message: "there is no active trips" })
            return res.status(200).json({ trips })
    }
    catch (err) {
        return res.status(500).json({message:"Internal error" })
    }

}

module.exports = {
    postTrip, tripByStatus, completeTrip
}