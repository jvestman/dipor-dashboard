/* All services */
Meteor.publish("allServices", function () {
  // Find all Services (database pointer)
  const allServices = Services.find();

  return allServices;
});

/* Single service */
Meteor.publish("singleService", function (serviceId) {
  // Find single service by ID (database pointer)
  const singleService = Services.find(serviceId);

  return singleService;
});

/* Service(s) for a given department */
Meteor.publish("departmentServices", function (departmentId) {
  // Find all services for a given department (database pointer)
  const departmentServices = Services.find({ departmentId: departmentId });

  return departmentServices;
});

/* Service(s) for a given owner */
Meteor.publish("ownerServices", function (ownerId) {
  // Find all services for a given project owner (database pointer)
  const ownerServices = Services.find({ ownerIds: ownerId });

  return ownerServices;
});

Meteor.publish("serviceOwner", function (ownerId) {

  // Get all users from service owner IDs
  const owner = Meteor.users.find(ownerId);

  return owner;
});
