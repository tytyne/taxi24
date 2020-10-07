'use strict';

module.exports=(sequelize,DataTypes)=>{
    const Trip=sequelize.define('Trip',{
        status:{
            type:DataTypes.STRING,
            defaultValue:'active',
            allowNull:false,
        
        
        },

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