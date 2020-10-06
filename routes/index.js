const express= require('express');
const driverControllers = require('../controllers/getDrivers');
const riderControllers = require('../controllers/getRiders')
const tripControllers=require('../controllers/tripcontr')
const router=express.Router()

router.get('/alldrivers',driverControllers.allDrivers); //all drivers
router.get('/available/drivers',driverControllers.driverByStatus);//available drivers 
router.get('/available/range/drivers',driverControllers.all); //3km away
router.get('/driver/:id',driverControllers.driverById);// by id




router.post('/trip',tripControllers.postTrip); // post a trip
router.get('/complete/trip/:id',tripControllers.completeTrip) //complete a trip
router.get('/active/trips',tripControllers.tripByStatus) //active trips


router.get('/allriders',riderControllers.allRiders); // all riders
router.get('/rider/:id',riderControllers.riderById); // rider by ID
router.get('/closer/rider/:id',riderControllers.closeToriders) // 3 close drivers 

module.exports=router