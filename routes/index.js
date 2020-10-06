const express= require('express');
const driverControllers = require('../controllers/getDrivers');
const riderControllers = require('../controllers/getRiders')
const tripControllers=require('../controllers/tripcontr')
const router=express.Router()

router.get('/alldrivers',driverControllers.allDrivers); //all drivers //completed
router.get('/available/drivers',driverControllers.driverByStatus);//available drivers // completed
router.get('/available/range/drivers',driverControllers.all); //3km away //completed
router.get('/driver/:id',driverControllers.driverById);// by id //completed




router.post('/trip',tripControllers.postTrip); // post a trip
router.get('/complete/trip/:id',tripControllers.completeTrip) //complete a trip
router.get('/active/trips',tripControllers.tripByStatus) //active trips


router.get('/allriders',riderControllers.allRiders); // all riders //completed 
router.get('/rider/:id',riderControllers.riderById); // rider by ID //completed
router.get('/closer/rider/:id',riderControllers.closeToriders) // 3 close drivers //completed

module.exports=router