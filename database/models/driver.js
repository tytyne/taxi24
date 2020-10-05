'use strict';

module.exports=(sequelize,DataTypes)=>{


  const Driver=sequelize.define('Driver',{
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status:{type:DataTypes.STRING,
    defaultValue:'available',
    validate:{
      isln:{
        args:[
          ['available','unavailable']

        ]
      }
    }

  },


  },{})
 
  return Driver;
};