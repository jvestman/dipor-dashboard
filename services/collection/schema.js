Services.schema = new SimpleSchema({
  name: {
    type: String
  },
  logoId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
});
