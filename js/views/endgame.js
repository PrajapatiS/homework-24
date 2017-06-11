
let View= require("ampersand-view");

module.exports= View.extend({
    template: document.querySelector("#endgame-template").innerHTML,
    bindings:{
        'model.amount':'.fares',
    },
    render:function(){
        this.renderWithTemplate();
    },
});


