// Global API configuration
API = {};

// Version 1
API.v1 = new Restivus({
  apiPath: 'api/',
  version: 'v1',
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  useDefaultAuth: false,
  prettyJson: true,
  enableCors: true
});

// Add Restivus Swagger configuration
// - meta, definitions, params, tags
API.v1.swagger = {
  meta: {
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
  },
  definitions: {
    newOrganization: {
      type: "object",
      required: [
        "name",
        "description",
        "administratorIds"
      ],
      properties: {
        "name": {
          type: "string"
        },
        "description": {
          type: "string"
        },
        "administratorIds": {
          type: "array",
          items: {
            type: "string"
          }
        },
        "memberIds": {
          type: "array",
          items: {
            type: "string"
          }
        },
        "contactPersonId": {
          type: "string"
        }
      }
    },
    newDepartment: {
      type: "object",
      required: [
        "name",
        "description",
        "organizationId",
        "administratorIds"
      ],
      properties: {
        "name": {
          type: "string"
        },
        "description": {
          type: "string"
        },
        "organizationId": {
          type: "string"
        },
        "administratorIds": {
          type: "array",
          items: {
            type: "string"
          }
        },
        "memberIds": {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    }
  },
  params: {
    departmentId: {
      name: "id",
      in: "path",
      description: "Department ID",
      required: true,
      type: "string"
    },
    organizationId: {
      name: "id",
      in: "path",
      description: "Organization ID",
      required: true,
      type: "string"
    },
    department: {
      name: "department",
      in: "body",
      description: "Department to add.",
      required: true,
      schema: {
        $ref: "#/definitions/newDepartment"
      }
    },
    organization: {
      name: "organization",
      in: "body",
      description: "Organization to add.",
      required: true,
      schema: {
        $ref: "#/definitions/newOrganization"
      }
    },
  },
  tags: {
    organization: "Organizations",
    department: "Departments"
  }
}

// Enable user endpoints if authentication is enabled
if(API.v1._config.useDefaultAuth) {
  // Generates: POST on /api/v1/users and GET, DELETE /api/v1/users/:id for
  // Meteor.users collection
  API.v1.addCollection(Meteor.users, {
    excludedEndpoints: ['getAll', 'put'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      get: {
        swagger: {
          description: "Returns user with given ID.",
          responses: {
            "200": {
              description: "One user."
            }
          }
        }
      },
      post: {
        authRequired: false,
        swagger: {
          description: "Add user.",
          responses: {
            "200": {
              description: "Return user that was added."
            }
          }
        }
      },
      delete: {
        roleRequired: 'admin',
        swagger: {
          description: "Delete user.",
          responses: {
            "200": {
              description: "Successful delete."
            }
          }
        }
      }
    }
  });
}

// Generate Swagger to route /api/v1/swagger.json
API.v1.addSwagger('swagger.json');
