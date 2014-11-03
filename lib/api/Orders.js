"use strict";
var _ = require('underscore'),
  Order = require('../model/Order'),
  util = require('util'),
  ApiCore = require('facet-core').ApiCore;

/** 
 * API constructor
 *
 * @param   {Object}  options   Options object - must contain 'db' (mongoose instance)
 *                            and 'intercom' (EventEmitter instance) keys.
 *
 * @return  {void}
 */
var OrdersAPI = function( options ) {
  // set the options
  // this.setCommonAttributes( options );

  OrdersAPI.super_.call(this, options);

  // set the model
  this.Model = new Order( this.options );

  // set the router for automation
  this.setupRouterManifest();

  // register the api events
  this.registerEvents();

};

/**
 * Orders API inherits from Core API
 */
util.inherits(OrdersAPI, ApiCore);

/**
 * Sets up the router manifest for route automation
 *
 * @return   {void}
 */
OrdersAPI.prototype.setupRouterManifest = function () {

  // update the router manifest 
  this.routerManifest
    .setApiEventType('order')
    .setApiModelId('orderId')
    .setRouteBase('/orders')
    .addRoutes([
      { verb: 'GET',    route: '/:orderId',          emit: 'facet:order:findone' },  // GET a single order by id
      { verb: 'GET',    route: '',                  emit: 'facet:order:find'    },  // GET an array of order objects 
      { verb: 'POST',   route: '',                  emit: 'facet:order:create'  },  // POST new order
      { verb: 'PUT',    route: '/:orderId',          emit: 'facet:order:update'  },  // PUT single/multiple orders
      { verb: 'DELETE', route: '/:orderId',          emit: 'facet:order:remove'  },  // DELETE a single order resource
      { verb: 'GET',    route: '/:orderId/shipping', emit: 'facet:order:calculate:shipping'  },  // 
      { verb: 'GET',    route: '/:orderId/tax',      emit: 'facet:order:calculate:tax'  },  // 
      { verb: 'GET',    route: '/:orderId/subtotal', emit: 'facet:order:calculate:subtotal'  },  // 
      { verb: 'GET',    route: '/:orderId/checkout', emit: 'facet:order:checkout'  },  // 
    ])
    .extendRouteErrorMessages({
      container: 'The API order does not have a valid container id.',
      conditions: 'No query conditions were specified',
      query: 'Error querying for order(s): ',
      notFound: 'No order was found.',
      find: 'No order(s) matched your criteria.',
      findOne: 'No order matched your criteria.',
      update: 'No updates were specified.',
      updateMatch: 'No products were updated based on your criteria.',
      create: 'No data supplied for creating new order.',
      createMatch: 'No order was created based on your criteria.',
      remove: 'No data supplied for removing order.',
      removeMatch: 'No order was removed based on your criteria.'
    });
};


/** 
 * Registers this API's event listeners. Note that the CRUD functions
 * bound here are part of the facet core module in the FacetApiCore class
 *
 * The standard CRUD functions (find, findOne, create, update, remove)
 * are part of FacetApiCore. If you want custom behavior or logic, emit
 * a different event in the routerManifest for the http method in question
 * or bind the existing events to different handers. You'll still be able to invoke
 * the standard CRUD functions from within your custom handler with this.<function name>.
 *
 * @return  {void}
 */
OrdersAPI.prototype.registerEvents = function () {
  // basic CRUD functions
  this.intercom.on('facet:order:find', this.find.bind(this) );
  this.intercom.on('facet:order:findone', this.findOne.bind(this) );
  this.intercom.on('facet:order:create', this.create.bind(this) );
  this.intercom.on('facet:order:update', this.update.bind(this) );
  this.intercom.on('facet:order:remove', this.remove.bind(this) );

};



/**
 * Exports the Carts API
 *
 * @type   {Object}
 */
exports = module.exports = OrdersAPI;

