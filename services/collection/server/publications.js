Meteor.publish("allServices", funciton () {
  // Find all Services (database pointer)
  const allServices = Services.find();

  return allServices;
});
