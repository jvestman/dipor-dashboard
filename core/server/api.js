// Global API configuration
ApiV1 = new Restivus({
  apiPath: 'api/',
  version: 'v1',
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  useDefaultAuth: true,
  prettyJson: true,
  enableCors: true
});

// Generates: POST on /api/users and GET, DELETE /api/users/:id for
// Meteor.users collection
ApiV1.addCollection(Meteor.users, {
  excludedEndpoints: ['getAll', 'put'],
  routeOptions: {
    authRequired: true
  },
  endpoints: {
    post: {
      authRequired: false
    },
    delete: {
      roleRequired: 'admin'
    }
  }
});
