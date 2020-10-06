const express= require('express');
const driverControllers = require('../controllers/getDrivers');
const riderControllers = require('../controllers/getRiders')
const tripControllers=require('../controllers/tripcontr')
const router=express.Router()

router.get('/alldrivers',driverControllers.allDrivers);
router.get('/all',driverControllers.all);
router.get('/driver/:id',driverControllers.driverById);
router.get('/driver',driverControllers.driverByStatus);
router.get('/allriders',riderControllers.allRiders);
router.get('/rider/:id',riderControllers.riderById);
router.get('/closer/:id',riderControllers.closeToriders)
router.post('/trip',tripControllers.postTrip);
router.get('/complete/:id',tripControllers.completeTrip)
router.get('/trips',tripControllers.tripByStatus)

module.exports=router