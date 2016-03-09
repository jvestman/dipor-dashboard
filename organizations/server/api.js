// Generates: GET, POST on /api/v1/organizations and GET, PUT, DELETE on
// /api/v1/organizations/:id for the Organizations collection
ApiV1.addCollection(Organizations, {
  routeOptions: {
    authRequired: true
  }
});
