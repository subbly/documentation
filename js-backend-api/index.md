---
layout: page
title: JS Backend api documentation
permalink: /js-backend-api/
---
## Get started

Built on top of Backbone and Handlebars, powered by [Subbly's REST API](http://documentation.subbly.com/rest-api/ "Subbly's REST API"), a minimalist but powerful back office for your store.

### Summary

* [Basic's](#basics) 
* [API methods](#apimethods)
* [The "Hello World" plugins](#helloworld)

### <a name="basics"></a>Basic's

You can acces to global object by calling `Subbly` into your page.  
e.g. : you want to listen user login

	Subbly.on('user::loggedIn', function()
	{
		console.log('user is logged-in') 
	})

### <a name="apimethods"></a>API methods

#### Server Configuration

You can access and modify the server generated enviroment configuration 

	Subbly.getConfig('dot.notation.path', 'value')
	Subbly.setConfig('dot.notation.path', 'value')

Defaults configuration includes : 

* Base URL, `baseUrl`
* API URL, `apiUrl`
* Application environment (local, staging, production, etc.), `env`
* Application debug mode, `debug`
* Backend available locales, `locales`
* Translations's JSON files URL, `i18nresource`
* Available Currencies, `currencies`
* Available Orders's status list, `orderStatus`
* Available Shop's states List, `siteStatus`
* Upload utilities `upload.maxFileSize`

#### Events

Based on Backbone's events, you can listen and trigger actions. 

* `on`
* `once`
* `off`
* `trigger`

#### UI'S SHORTCUTS

* Feedback
* i18n
* storeSettings


### <a name="helloworld"></a>The "Hello World" plugins


    (function( window )
    {
      // CONTROLLER
      // --------------------------------

      var HelloWord = 
      {
          _tplStructure:   'full'
        , _viewsNames:     'Vendor.View.HelloWord'
        , _controllerName: 'HelloWord'
        , _listDisplayed:  false
        , _mainNavRegister:
          {
              name:       'HelloWord'
            , order:      0
            , defaultUrl: 'helloworld'
          }

        , routes: {
              'helloworld':      'display'
          }


          // Routes
          //-------------------------------

        , display: function( uid ) 
          {
            this.getViewByPath( 'Vendor.View.HelloWord' )
              .displayTpl()
          }
      }


      // VIEWS
      // --------------------------------
      // Product sheet view
      var HelloWordView = 
      {
          _viewName:     'HelloWord'
        , _viewTpl:      TPL.plugins.helloworld
      }

      // REGISTER PLUGIN
      // --------------------------------


      Subbly.register( 'Vendor', 'HelloWord', 
      {
          'View:HelloWord':       HelloWordView
        , 'Controller:HelloWord': HelloWord
      })

    })( window )
    