'use strict';

module.exports=(sequelize,DataTypes)=>{
    const Invoice=sequelize.define('Invoice',{
       

    },{})

    Invoice.associate=function(models){
        Invoice.belongsTo(models.Trip,{
            foreignKey:'tripId',
                as:'trip',
                onDelete:'CASCADE'
               
         
        });

     

    };
    return Invoice

}