// Generates: GET, POST on /api/departments and GET, PUT, DELETE on
// /api/departments/:id for the Departments collection
ApiV1.addCollection(Departments, {
  routeOptions: {
    authRequired: true
  }
});
