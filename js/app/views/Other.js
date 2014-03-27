define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Other.html'),
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