let View= require('ampersand-view');

module.exports= View.extend({
template: document.querySelector("#game-template").innerHTML,
events:{
     'click #btn_hyb' : 'passHybrid',
     'click #btn_lux' : 'passLuxury',
},
 render:function(){
    this.renderWithTemplate();
},
});