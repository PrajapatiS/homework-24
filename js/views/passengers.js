
let View = require('ampersand-view');
let vpassenger =require('./passenger');
module.exports= View.extend({

    template: document.querySelector("#passengers-template").innerHTML,
    render(){
        this.renderWithTemplate();
        this.renderCollection(this.collection, vpassenger, this.el.querySelector('ul'));
    }
});