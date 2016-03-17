// All departments for a specific organization
Meteor.publish("organizationDepartments", function (organizationId) {
  // Find all departments associated with current Organization ID
  const departments = Departments.find({ "organizationId": organizationId });

  return departments;
});

// Single department publication
Meteor.publish("singleDepartment", function (departmentId) {
  // Find a single department by ID
  const department = Departments.find(departmentId);

  return department;
});

Meteor.publish("departmentMember", function (memberId) {
  // Get all users from department member IDs
  const member = Meteor.users.find(memberId);

  return member;
});
