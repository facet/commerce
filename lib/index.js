"use strict";
var util = require('util'),
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
  // if( this.options.hasOwnProperty("ProductsAPI") && this.checkConstraints( this.options.ProductsAPI ) ) {
  //   ProductsAPI = this.options.ProductsAPI;
  // }
  // if( this.options.hasOwnProperty("CategoriesAPI") && this.checkConstraints( this.options.CategoriesAPI ) ) {
  //   CategoriesAPI = this.options.CategoriesAPI;
  // }

  // instantiate the api modules
  // this.Products = new ProductsAPI( this.options );
  // this.Categories = new CategoriesAPI( this.options );

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
