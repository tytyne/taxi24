const express=require('express')
const app = express()
const routes=require('./routes')
const models=require("./database/models")
const { sequelize,Rider,Driver,Trip } = models;
const Promise=require('bluebird')
const bodyparser=require('body-parser')
const Riders=require("./seeders/rider.json")
const Drivers=require("./seeders/driver.json")
const Trips=require("./seeders/trip.json")
const swaggerUi = require("swagger-ui-express")
swaggerDocument = require("./swagger.json")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



const Port=process.env.Port||3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/api',routes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(Port,()=>{
    console.log(`listen to port ${Port}`)
    sequelize.sync({force: true}).then(async()=>{
        await Promise.all(
            Driver.bulkCreate(Drivers)
            
        )
        await Promise.all(Rider.bulkCreate(Riders))
        await Promise.all(Trip.bulkCreate(Trips))
    })


})

