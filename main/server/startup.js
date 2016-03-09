Meteor.startup(function() {
  // Global API configuration
  let Api = new Restivus({
    useDefaultAuth: false,
    prettyJson: true
  });
});
