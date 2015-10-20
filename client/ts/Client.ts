/// <reference path="../headers/jquery/jquery.d.ts" />
/// <reference path="../headers/requirejs/require.d.ts" />
/// <reference path="../headers/backbone/backbone.d.ts" />
/// <reference path="../headers/marionette/marionette.d.ts" />

/**
 * Client is the main application class, it bootstraps the app.
 * It creates the basic views, handles the initial user login process,
 * initializes the controllers.
 */
class Client
{
  constructor()
  {
    var app = new Marionette.Application();
    app.on("before:start", function(options){
      options.moreData = "Yo dawg, I heard you like options so I put some options in your options!";
    });
    app.on("start", function(options){
      console.log(options);
      if (Backbone.history){
        Backbone.history.start();
      }
    });
    app.start();
  }
}