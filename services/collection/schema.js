Services.schema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  logoId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  departmentId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: "hidden"
    }
  },
  ownerIds: {
    type: Array
  },
  "ownerIds.$": {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  status: {
    type: String,
    allowedValues: [
      "idea",
      "design",
      "deciding",
      "development",
      "proofOfConcept",
      "alpha",
      "beta",
      "production",
      "sunset",
      "retired"
    ]
  },
  version: {
    type: String
  },
  dataSourceIds: {
    type: Array,
    optional: true
  },
  "dataSourceIds.$": {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  visibility: {
    type: String,
    optional: true
  }
});

// Attach the schema for automatic validation
Services.attachSchema(Services.schema);
