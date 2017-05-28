/* DOM file. */

 


window.addEventListener('load', function(){

    let TaxiModel= require('./models/crazytaxi');
    let TaxiView= require('./views/crazytaxi');
    let Passenger= require('./models/passenger');
    let PassView= require('./views/passenger');
    
    let taximodel= new TaxiModel();
        taximodel.x= 10;
        taximodel.y= 10;
        taximodel.fuel=200;
   

    let taxiview= new TaxiView({
     el: document.querySelector('main'),
     model: taximodel,
    });


 let m_Pass= new Passenger();
        m_Pass.occupation= 'service';
        m_Pass.status= 'waiting';
        m_Pass.name='zzzzz';

    let PView= new PassView({
     el: document.querySelector('view-passenger'),
     model: m_Pass,
    });

    
    taxiview.render();
    PView.render();


    taximodel.ShowGrid();
    taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);

//passenger() pick up all passenger
   let passengerList=[
        {name:'Donald' , occupation: 'service',  x: 8, y: 5 },
        {name:'hope' , occupation: 'service',  x: 14, y: 8 },
        {name:'Don' , occupation: 'service',  x: 9, y: 15 },
    ];
    
    for(let i=0; i<passengerList.length; i++){
            console.log(passengerList[i].x);
            let pass= new Passenger();
            pass.x=passengerList[i].x;
            pass.y=passengerList[i].y;
         pass.ShowPassengerLocation(pass.x, pass.y);
 

        }

    // showcoordinate(taximodel.x, taximodel.y);

    let btnup = document.querySelector('#b-up');
    btnup.addEventListener('click',function(){
        taximodel.Showcoordinate_up();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(passengerList);
         //console.log(passengerList);
         
    });

     let btndown = document.querySelector('#b-down');
    btndown.addEventListener('click',function(){
         taximodel.Showcoordinate_down();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(passengerList);
    });

     let btnleft = document.querySelector('#b-left');
    btnleft.addEventListener('click',function(){
         taximodel.Showcoordinate_left();
         taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
         taximodel.pickUp(passengerList);
    });

     let btnright = document.querySelector('#b-right');
    btnright.addEventListener('click',function(){
          taximodel.Showcoordinate_right();
          taximodel.ShowPlayerLocation(taximodel.x, taximodel.y);
          taximodel.pickUp(passengerList);
    });

});