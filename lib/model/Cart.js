var Base = require('./BaseSchema');
var Cart = require('./CartSchema');

function CartModel(options) {
  // util.inherits(Cart, Base);

  var BaseSchema = new Base(options),
    CartSchema = new Cart(options, BaseSchema);
  
  var CartModel = options.db.model('Cart', CartSchema);

  return CartModel;
};

module.exports = CartModel;
