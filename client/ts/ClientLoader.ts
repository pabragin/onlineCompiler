// AMD Loader configuration and init code

/// <reference path="../headers/jquery/jquery.d.ts" />
/// <reference path="../headers/requirejs/require.d.ts" />
/// <reference path="../headers/dustjs-linkedin/dustjs-linkedin.d.ts" />
/// <reference path="../headers/marionette/marionette.d.ts" />

/**
 * Here we define all externally used libraries with their relative pathes.
 */
require.config({
  baseUrl : '/',
  paths   : {
    jquery           : '../lib/jquery-2.1.4.min',
    underscore       : '../lib/underscore-min',
    backbone         : '../lib/backbone-min',
    dustjs           : '../lib/dust-linkedin',
    marionette       : '../lib/backbone.marionette.min'
  },

  shim : {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    'dustjs' : {
      exports : 'dust'
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    }
  }

});

/**
 * Pre-load the most common dependencies so we don't need to import it every time.
 */
require(['js/Client'],

    function (Client) {

      var app = new Client();
    }
);
