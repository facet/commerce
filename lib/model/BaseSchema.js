var _ = require('underscore'),
  util = require('util');

function MakeBaseSchema(options){

  var Schema = options.db.Schema;

  var BaseSchema = function() {
    options.db.Schema.apply(this, arguments);

    this.add({
      tenant_id: { type: Schema.Types.ObjectId, ref: 'ContainerSchema' },
      app_id: { type: Schema.Types.ObjectId, ref: 'ApplicationSchema' }
    });

  util.inherits(BaseSchema, options.db.Schema);

  return BaseSchema;
};

module.exports = exports = MakeBaseSchema;
