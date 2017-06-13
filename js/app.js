/* DOM file. */


window.addEventListener('load', function(){

    let TaxiModel= require('./models/crazytaxi');
    let TaxiView= require('./views/crazytaxi');
    let Passengers= require('./models/passengers');
    let PassView= require('./views/passengers');
    let StartView=require('./views/start');
    let EndGame= require('./views/endgame');
    let Passenger= require('./models/passenger');
    
    let taximodel= new TaxiModel();
        taximodel.x= 10;
        taximodel.y= 10;
        taximodel.fuel=200;
        taximodel.t_fare=0;
        taximodel.TotalFare=0;
        
    let taxiview= new TaxiView({
     el: document.querySelector('main'),
     model: taximodel,
    });


    let m_Pass= new Passengers();
    m_Pass.createpassenger(); 
    
    let PView= new PassView({
        el: document.querySelector('#view-passengers'),
        collection: m_Pass,
    });

    let g_start= new StartView({
    el:document.querySelector('#view-gamestart'),
     model:taximodel,
   });

   let g_end= new EndGame({
    el:document.querySelector('#view-endgame'),
     model:taximodel,
   });
    
    taxiview.render();
    PView.render();
    g_start.render();
    g_end.render();


    taximodel.ShowGrid();
    taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);

    // Map passenger in grid
    m_Pass.each(function(model){
        console.log('Show');
        model.ShowPassengerLocation(model.x, model.y);
    });
   /* for(let i=0; i<passengerLists.length; i++){     
            let pass= new Passenger();
             pass.x=passengerLists[i].x;
            pass.y=passengerLists[i].y;
         pass.ShowPassengerLocation(pass.x, pass.y);
    } */

    // showcoordinate(taximodel.x, taximodel.y);

    let btnup = document.querySelector('#b-up');
    btnup.addEventListener('click',function(){
        taximodel.Showcoordinate_up();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(m_Pass);
         //console.log(passengerList);
         
    });

     let btndown = document.querySelector('#b-down');
    btndown.addEventListener('click',function(){
         taximodel.Showcoordinate_down();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(m_Pass);
    });

     let btnleft = document.querySelector('#b-left');
    btnleft.addEventListener('click',function(){
         taximodel.Showcoordinate_left();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(m_Pass);
    });

     let btnright = document.querySelector('#b-right');
    btnright.addEventListener('click',function(){
          taximodel.Showcoordinate_right();
          taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
          taximodel.pickUp(m_Pass);
    });

});