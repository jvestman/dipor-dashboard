// Global API configuration
API = {};

// Version 1
API.v1 = new Restivus({
  apiPath: 'api/',
  version: 'v1',
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  useDefaultAuth: true,
  prettyJson: true,
  enableCors: true
});

// Generates: POST on /api/v1/users and GET, DELETE /api/v1/users/:id for
// Meteor.users collection
API.v1.addCollection(Meteor.users, {
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
