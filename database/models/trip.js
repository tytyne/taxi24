'use strict';

module.exports=(sequelize,DataTypes)=>{
    const Trip=sequelize.define('Trip',{


        status:{
            type:DataTypes.STRING,
            defaultValue:'active',
            allowNull:false,
            // validate:{
            //     isln:{
            //       args:[
            //         ['complete','active','cancelled']
          
            //       ]
            //     }
            //   },
        
        
        },




        createdAt:{
            allowNull:false,
            type:DataTypes.DATE
        }

    },{})

    Trip.associate=function(models){
        Trip.belongsTo(models.Driver,{
            foreignKey:'driverId',
                as:'driver',
                onDelete:'CASCADE'
               
         
        });

        Trip.belongsTo(models.Rider,{
            foreignKey:'riderId',
                as:'rider',
                onDelete:'CASCADE',
            

           
          
        });

    };
    return Trip

}