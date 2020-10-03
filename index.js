const express=require('express')
const app = express()
const Driver=require("./Models/driver");
const Rider=require("./Models/rider")

const Port=process.env.Port||5000;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// all drivers
app.get('/alldrivers',(req,res)=>{
    var drivers = Driver.filter(elements=>elements)
    if(drivers)
    res.json(drivers)
    else res.sendStatus(400)

})
//get driver by id


app.get('/driver/:id',(req,res)=>{
    var driver = Driver.filter(elements=>elements.id == req.params.id)
    console.log(Driver)

    if(driver)
    res.json(driver)
    else res.sendStatus(400)
})
// where  driver status available
app.get('/drivers',(req,res)=>{
    var driver = Driver.filter(elements =>elements.status=='available')
    if(driver)
    res.json(driver)
    else res.sendStatus(400)
})

//all riders

app.get('/riders',(req,res)=>{
    var rider=Rider.filter(elements=>elements)
    if(rider)
    res.json(rider)
    else res.sendStatus(400)
})


app.listen(Port,()=>{
    console.log(`listen to port ${Port}`)
})
// rider by ID


app.get('/rider/:id',(req,res)=>{
    var rider=Rider.find(elements=>elements.id == req.params.id)
    if(rider)
    res.json(rider)
    else res.sendStatus(400)
})
