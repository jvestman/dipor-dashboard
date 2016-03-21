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

/* Service(s) for a given department */
Meteor.publish("departmentServices", funciton (departmentId) {
  // Find all services for a given department (database pointer)
  const departmentServices = Services.find({ departmentId: departmentId });

  return departmentServices;
});
