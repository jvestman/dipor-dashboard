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
  },
  createdAt: {
    type: Date,
    autoValue: function () {

      // Check if mongoDB insert operation is initial
      if (this.isInsert)
        return new Date();

      // Check if mongoDB insert operation is initial
      else if (this.isUpsert)
        return { $setOnInsert: new Date() };

      // If not - field is not updated
      else
        this.unset();
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

// Attach the schema
Departments.attachSchema(Departments.schema);
