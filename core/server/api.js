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
  enableCors: true,
  swagger: {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Dipor API",
      description: "Dipor REST API",
      termsOfService: "https://dashboard.digipalvelutehdas.fi/terms/",
      contact: {
        name: "Dipor team"
      },
      license: {
        name: "MIT"
      }
    }
  }
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
