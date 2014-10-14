"use strict";
var util = require('util'),
  CartsAPI = require('./api/Carts'),
  Core = require('facet-core').Core;

/**
 * Commerce API constructor
 * 
 * @param   {Object}  options   Options object - must contain 'db' (mongoose instance)
 *                              and 'intercom' (EventEmitter instance) keys.
 *
 * @return  {void} 
 */
var CommerceAPI = function( options ){
  CommerceAPI.super_.call(this, options);
  
  // set the options
  this.setCommonAttributes( options );

  // check the contraints and set the custom modules
  // if( this.options.hasOwnProperty("CartsAPI") && this.checkConstraints( this.options.CartsAPI ) ) {
  //   CartsAPI = this.options.CartsAPI;
  // }

  // instantiate the api modules
  this.Carts = new CartsAPI( this.options );

  // register catalog's events
  this.registerEvents();

  // register catalog's routes
  this.registerRoutes();
};

/**
 * Catalog API inherits from Core
 */
util.inherits(CommerceAPI, Core);


CommerceAPI.prototype.registerEvents = function() {
};


CommerceAPI.prototype.registerRoutes = function() {

  // this.Products.routerManifest.addRoutes([
  //   { verb: 'GET', route: '/:productId/categories', emit: 'facet:product:category:find' },  // GET all the categories for the product
  // ]);
  // this.Categories.routerManifest.addRoutes([
  //   { verb: 'GET', route: '/:categoryId/products', emit: 'facet:category:product:find' }, // GET all the products for the category
  // ]);

};

// export the main function
exports = module.exports = CommerceAPI;
