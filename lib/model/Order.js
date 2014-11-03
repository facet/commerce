var Base = require('./BaseSchema');
var Order = require('./OrderSchema');

function OrderModel(options) {
  // util.inherits(Order, Base);

  var BaseSchema = new Base(options),
    OrderSchema = new Order(options, BaseSchema);
  
  var OrderModel = options.db.model('Order', OrderSchema);

  return OrderModel;
};

module.exports = OrderModel;
