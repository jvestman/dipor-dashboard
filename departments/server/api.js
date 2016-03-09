// Generates: GET, POST on /api/v1/departments and GET, PUT, DELETE on
// /api/v1/departments/:id for the Departments collection
ApiV1.addCollection(Departments, {
  routeOptions: {
    authRequired: true
  }
});

// Maps to: /api/v1/organizations/:id/departments
ApiV1.addRoute('organizations/:id/departments', {authRequired: true}, {
  get: function () {
    const organizationId = this.urlParams.id;
    const departments = Departments.find({ "organizationId": organizationId });

    return departments;
  }
});
