if(Meteor.isServer) {
  Meteor.startup(function() {
    // Define collections exposed for REST API
    SimpleRest.configure({
      collections: ["organizations"]
    });
  });
}
