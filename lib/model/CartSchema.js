
function CartSchema(options, BaseSchema){
  var Schema = options.db.Schema;
  
  var CartSchema = new BaseSchema({
    items: [{
      _id: false,
      product_id: { type: Schema.Types.ObjectId, ref: 'ProductSchema' },
      name: String,
      description: String,
      sku: String,
      weight: String,
      dimensions: {
        width: Number,
        length: Number,
        height: Number
      },
      padding_multiplier: Number
      ship_domestic: {type: Boolean, default: true},
      ship_international: {type: Boolean, default: true},

    }],
    weight_units: String,
    dimension_units: String,
    ship_from: {
      // _id: false,
      name: String,
      email: String,
      phone: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      residential: {type: Boolean, default: true}
    },
    ship_to: {
      // _id: false,
      name: String,
      email: String,
      phone: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      residential: {type: Boolean, default: true}
    },
    promos: [{
      _id: false,
      promo_id: { type: Schema.Types.ObjectId, ref: 'PromoSchema' }
      // TODO: fill in promo fields
    }],
    custom_data: {},
    created_at: Date,
    updated_at: Date,
    // deleted_at: Date  // soon to allow soft deletes
  });


  // set timestamps
  CartSchema.pre('save', function(next) {
    var now = new Date().toISOString();
    this.created_at = now;
    this.updated_at = now;

    next();
  });

  CartSchema.virtual('id').get(function() {
    return this._id.toHexString();
  });

  return CartSchema;
};


module.exports = exports = CartSchema;
