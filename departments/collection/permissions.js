Departments.allow({
  insert: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    const organization = Organizations.findOne(organizationId);

    // Only allow organization administrators to insert
    return organization.currentUserIsAdmin();
  },
  update: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    const organization = Organizations.findOne(organizationId);

    // Only allow organization administrators to insert
    return organization.currentUserIsAdmin();
  }
});
