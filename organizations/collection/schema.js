// Create schema
Organizations.schema = new SimpleSchema({
  "name": {
    "type": String
  },
  "administratorId": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  }
});

// Attach the schema
Organizations.attachSchema(Organizations.schema);
