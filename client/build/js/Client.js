/// <reference path="../headers/jquery/jquery.d.ts" />
/// <reference path="../headers/requirejs/require.d.ts" />
/// <reference path="../headers/backbone/backbone.d.ts" />
/// <reference path="../headers/marionette/marionette.d.ts" />
define(["require", "exports"], function (require, exports) {
    /**
     * Client is the main application class, it bootstraps the app.
     * It creates the basic views, handles the initial user login process,
     * initializes the controllers.
     */
    var Client = (function () {
        function Client() {
            var app = new Marionette.Application();
            app.on("start", function () {
                if (Backbone.history) {
                    Backbone.history.start();
                }
            });
            app.start();
            console.log(app);
        }
        return Client;
    })();
    return Client;
});
