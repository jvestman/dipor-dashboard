Departments.allow({
  insert: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    // Only allow organization administrators to insert
    return Organizations.findOne(organizationId).currentUserIsAdmin();
  },
  update: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    // Only allow organization administrators to insert
    return Organizations.findOne(organizationId).currentUserIsAdmin();
  }
});
