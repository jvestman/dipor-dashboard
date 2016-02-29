Meteor.publish("allOrganizations", function () {
  // Get database cursor to all organizations
  const allOrganizations = Organizations.find();

  return allOrganizations;
});
