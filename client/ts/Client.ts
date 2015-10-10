/// <reference path="../headers/jquery/jquery.d.ts" />
/// <reference path="../headers/requirejs/require.d.ts" />
/// <reference path="../headers/backbone/backbone.d.ts" />

/**
 * Client is the main application class, it bootstraps the app.
 * It creates the basic views, handles the initial user login process,
 * initializes the controllers.
 */
class Client
{
  constructor()
  {
    // start the router
    Backbone.history.start();
  }
}