/* Views file  */

let View = require('ampersand-view');

module.exports = View.extend({
template: document.querySelector("#coordinate-template").innerHTML,

//template: document.querySelector('#grid-template').innerHTML,

bindings:{
    'model.x' : '.x-coordinate',
    'model.y' : '.y-coordinate',
    'model.fuel': '.v-fuel',
    'model.TotalFare': '.d_fare',
},

    render:function(){

    this.renderWithTemplate();
},

});

