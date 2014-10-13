
function CartSchema(options, BaseSchema){
  var Schema = options.db.Schema;
  
  var CartSchema = new BaseSchema({
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

  CartSchema.virtual('id')
    .get(function() {
    return this._id.toHexString();
  });

  return CartSchema;
};



module.exports = exports = CartSchema;
