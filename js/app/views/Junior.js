define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Junior.html'),
        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {           
            this.render();          
        },
    


        render: function () {
    
            this.$el.html(template());

        },


    });

});