/* Crazy taxi model file */

let State= require('ampersand-state');

module.exports= State.extend({
    props: {
        x: 'number',
        y: 'number',
        fuel: 'number',
        TotalFare:'number',

        loss_fuel:'number',
        t_fare: 'number',        

    },

TaxiFare(){
    
  this.TotalFare  = this.TotalFare + this.t_fare;
  console.log(this.TotalFare);
},

ShowPlayerLocation :function(x,y){
   let taxi= document.querySelector('.taxi');
    if(taxi!== null){
       taxi.classList.remove('taxi');
   }

   let taxi_P = document.querySelectorAll('td')[this.y *20 + this.x];
   
   taxi_P.classList.add('taxi');
  
 
},

 ShowGrid: function(){
     let tbl= document.querySelector('#grid');
     let count=0;
     for(let tr=0;tr<20; tr++){
         let trs=document.createElement('tr');
            //trs.classList.add('tr');
         for(let td=0;td<20; td++){
             let tds= document.createElement('td');
             tds.classList.add('tds')
             //count= count+1;
             //tds.id=count;
            //el.classList.add('td');
           
            trs.appendChild(tds);
         }
         tbl.appendChild(trs);
     }
 },

Showcoordinate_up: function(){
     
    if(this.y>0){
        this.y--;
        this.fuel--;
    }
  
},
Showcoordinate_down: function(){
 
    if(this.y<19){
        this.y++;
        this.fuel--;
    }
  },
Showcoordinate_left: function(){
   
    if(this.x>0){
        this.x--;
    this.fuel--;
}
},
Showcoordinate_right: function(){
  
   if(this.x<19){
       this.x++;
    this.fuel--;
   }
},


pickUp :function(passLists){
    let xValue = this.x;
    let yValue = this.y;
    let pickedup= false;
     passLists.each(function(model){
        if(model.x === xValue && model.y === yValue && model.status=='waiting'){
            console.log('true');
            model.status='picked_up';
            let l_passenger = document.querySelectorAll('td')[yValue *20 + xValue];
            l_passenger.classList.remove('passenger');
            pickedup=true;
     }
     
    });
    if(pickedup== true){
    this.TaxiFare();
}
}

});