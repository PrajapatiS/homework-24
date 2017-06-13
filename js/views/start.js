let View= require('ampersand-view');

module.exports= View.extend({
template: document.querySelector("#game-template").innerHTML,
events:{
     'click #btn_hyb' : 'passHybrid',
     'click #btn_lux' : 'passLuxury',
},

passHybrid(){
    this.model.loss_fuel=1;
    this.model.t_fare=10;
    console.log('hello');
},
 passLuxury(){
     this.model.loss_fuel=2;
     this.model.t_fare=20;
 },

 render:function(){
    this.renderWithTemplate();
},
});