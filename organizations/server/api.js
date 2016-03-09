// Generates: GET, POST on /api/organizations and GET, PUT, DELETE on
// /api/organizations/:id for the Organizations collection
ApiV1.addCollection(Organizations, {
  routeOptions: {
    authRequired: true
  }
});
