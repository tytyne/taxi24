'use strict';


module.exports=(sequelize,DataTypes)=>{

    const Rider =sequelize.define('Rider',{
        name:DataTypes.STRING,
        phone:DataTypes.STRING,
        latitude:DataTypes.DECIMAL,
        longitude:DataTypes.DECIMAL,
    

    },{})

    return Rider;
}