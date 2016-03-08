Meteor.publish("allOrganizations", function () {
  // Get database cursor to all organizations
  const allOrganizations = Organizations.find();

  return allOrganizations;
},
// REST API configs
{
  method: "get",
  url: "api/organizations"
});

// Single organization by ID
Meteor.publish("singleOrganization", function (organizationId) {
  // Get database cursor to a single organization
  const singleOrganization = Organizations.find({ _id: organizationId });

  return singleOrganization;
},
// REST API configs
{
  method: "get",
  url: "api/organizations/:0"
});

Meteor.publish("organizationMembers", function (organizationId) {
  // Get organization
  const organization = Organizations.findOne(organizationId);

  // Get organization member IDs
  const memberIds = organization.memberIds;

  if (memberIds) {
    // Get all users from organization member IDs
    const members = Meteor.users.find({"_id": {$in: memberIds}});

    return members;
  }
})
