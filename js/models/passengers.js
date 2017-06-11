let pCollection =require('ampersand-collection');
let Passenger= require('./passenger');
let passengerList=[
        {name:'Donald' , occupation: 'service', status:'waiting',  x: 8, y: 5 },
        {name:'hope' , occupation: 'service', status: 'waiting',  x: 14, y: 8 },
        {name:'Don' , occupation: 'service', status: 'waiting', x: 9, y: 15 },
    ];
module.exports= pCollection.extend({
model:Passenger,
 
 createpassenger(){    
    for(let i=0;i<passengerList.length; i++){       
        this.add(new Passenger({
        name:passengerList[i].name,
        occupation:passengerList[i].occupation,
        status:passengerList[i].status,
        }));
        console.log(passengerList[i].name);
       
    }
   //return passengerList;
 }

 

});