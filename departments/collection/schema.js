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
    "autoValue": function () {
      // Check if field is already set
      if (this.isInsert ) {
        // If not set, add current user ID to memberIds array
        const memberIdArray = [ Meteor.userId() ];

        return memberIdArray;
      }
    }
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
