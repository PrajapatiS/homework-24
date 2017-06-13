let State=require('ampersand-state');
let passengerList=[];
module.exports=State.extend({
    props:{
        name: 'string',
        occupation: 'string',
        status: 'string',
        x: 'number',
        y: 'number'
    },

ShowPassengerLocation :function(x,y){

   let l_passenger = document.querySelectorAll('td')[this.y *20 + this.x];
   
   l_passenger.classList.add('passenger');
  
},

// createpassenger: function(){
//     // this.passengerList=[
//     //     {name:'Donald' , occupation: 'service',  x: 8, y: 5 },
//     //     {name:'hope' , occupation: 'service',  x: 14, y: 8 },
//     //     {name:'Don' , occupation: 'service',  x: 9, y: 15 },
//     // ];
//  return this.passengerList;   
    
//  },

});


