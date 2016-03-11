// Create schema
Departments.schema = new SimpleSchema({
  "name": {
    "type": String
  },
  "description": {
    "type": String
  },
  "organizationId": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  },
  "memberIds": {
    "type": [String],
    "optional": true
  },
  "memberIds.$": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  },
  "administratorIds": {
    "type": [String]
  },
  "administratorIds.$": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  }
});

// Attach the schema
Departments.attachSchema(Departments.schema);
