define(function (require) {

    "use strict";

    var Backbone            = require('backbone'),
        Feeds               = require('app/utils/feed_paths'),
        id=1,
        xml,
        parsed = [], 
        title = "", 
        description = "", 
        pubDate = "", 
        type,
        
        Generic = Backbone.Model.extend({  

        }),

        
        GenericCollection = Backbone.Collection.extend({

            model: Generic,
         
            url: function(){
                    type = Backbone.history.fragment;
                    if(in_browser===false){
                        return this.feed_domain+Feeds.getFeed();
                    }
                    else{
                        return "/school-proxy.php?feed_domain="+this.feed_domain+"&context="+Backbone.history.fragment;
                    }
            },
                    
            initialize: function(options){
                this.feed_domain = options.feed_domain;
        
            },
        
            getType: function(){
        
                return type;
        
            },
                    
            setType: function(name){
        
                type = name;
        
            },        
        
                    
                    
            parse: function (data) {
                xml = data;

              
                $(xml).find('entry').each(function (index) {
      
                    title = $(this).find('title').text();
                    description = $(this).find('content').text();
                    pubDate = $(this).find('published').text();
                    
                    var t = pubDate.indexOf("T");
                    //str.substring(1,4);
                    if(t!==-1){
                        //so there is a T, take everything before that (which is the date)
                        pubDate = pubDate.substring(0,t);
                    }
          
                    parsed.push({id:id, title: title,
                                description:description, pubDate:pubDate});
                    title, description, pubDate = "";
                   id++;
                });

                return parsed;
            },
                    

            fetch: function (options) {
                options = options || {};
                options.dataType = "xml";
                return Backbone.Collection.prototype.fetch.call(this, options);
            }

        });


    return {
        Generic: Generic,
        GenericCollection: GenericCollection
    };

});