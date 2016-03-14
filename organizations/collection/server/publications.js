Meteor.publish("allOrganizations", function () {
  // Get database cursor to all organizations
  const allOrganizations = Organizations.find();

  return allOrganizations;
});

// Single organization by ID
Meteor.publish("singleOrganization", function (organizationId) {
  // Get database cursor to a single organization
  const singleOrganization = Organizations.find({ _id: organizationId });

  return singleOrganization;
});

Meteor.publish("organizationMember", function (memberId) {
  // Get all users from organization member IDs
  const member = Meteor.users.find(memberId);

  return member;
});
