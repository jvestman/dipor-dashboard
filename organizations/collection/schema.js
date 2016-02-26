// Create schema
Organizations.schema = new SimpleSchema({
  "name": {
    "type": String
  },
  "description": {
    "type": String
  }
  "administratorIds": {
    "type": [String]
  },
  "administratorIds.$": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  },
  "contactPersonId": {
    "type": string,
    "regEx": SimpleSchema.RegEx.Id
  }
});

// Attach the schema
Organizations.attachSchema(Organizations.schema);
