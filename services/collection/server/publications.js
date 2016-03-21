/* All services */
Meteor.publish("allServices", funciton () {
  // Find all Services (database pointer)
  const allServices = Services.find();

  return allServices;
});

/* Single service */
Meteor.publish("singleService", funciton (serviceId) {
  // Find single service by ID (database pointer)
  const singleService = Services.find(serviceId);

  return singleService;
});
