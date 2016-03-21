Services.schema = new SimpleSchema({
  'name': {
    type: String
  },
  'organizationId': {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  }
});
