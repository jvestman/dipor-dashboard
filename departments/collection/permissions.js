Departments.allow({
  insert: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    // Get organization by current organization Id
    const organization = Organizations.findOne(organizationId);

    // Only allow organization administrators to insert
    return organization.currentUserIsAdmin();
  },
  update: function (userId, department) {

    // Get organization Id
    const organizationId = department.organizationId;

    // Get organization by current organization Id
    const organization = Organizations.findOne(organizationId);

    // Only allow organization administrators to insert
    return organization.currentUserIsAdmin();
  }
});
