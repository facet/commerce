var _ = require('underscore'),
  util = require('util');

function MakeBaseSchema(options){

  // var Schema = options.db.Schema;
  CoreSchema = require('facet-core').CoreSchema(options)

  var BaseSchema = function() {
    // options.db.Schema.apply(this, arguments);
    CoreSchema.apply(this, arguments);
  };

  util.inherits(BaseSchema, CoreSchema);

  return BaseSchema;
};



module.exports = exports = MakeBaseSchema;
