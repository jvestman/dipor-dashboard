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
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  stage: {
    type: String
  },
  version: {
    type: String
  },
  dataSourceIds: {
    type: Array
  },
  "dataSourceIds.$": {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  visibility: {
    type: String
  }
});
