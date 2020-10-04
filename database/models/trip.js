'use strict';

module.exports=(sequelize,DataTypes)=>{
    const Trip=sequelize.define('Trip',{


        status:{
            type:DataTypes.STRING,
            defaultValue:'active',
            // validate:{
            //     isln:{
            //         args:[
            //             ['complete','active','cancelled']
            //         ]

            //     }
            // }
        
        
        
        },




        createdAt:{
            allowNull:false,
            type:DataTypes.DATE
        }

    },{})

    Trip.associate=function(models){
        Trip.belongsTo(models.Rider,{
            foreignKey:{
                name:'riderId',
                allowNull:false
            },
            onDelete:'CASCADE',
         
        });

        Trip.belongsTo(models.Driver,{
            foreignKey:{
                name:'driverId',
                allowNull:false
            },

            onDelete:'CASCADE',
          
        });

    };
    return Trip

}