let State=require('ampersand-state');

module.exports=State.extend({
    prop:{
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


});


