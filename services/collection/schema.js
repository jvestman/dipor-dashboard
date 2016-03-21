Services.schema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  }
  logoId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  departmentId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  ownerIds: {
    type: Array
  },
  "ownerIds.$": {
    "type": String,
    "regEx": SimpleSchema.RegEx.Id
  }
});
