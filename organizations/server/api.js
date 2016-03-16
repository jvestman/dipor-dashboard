// Generates: GET, POST on /api/v1/organizations and GET, PUT, DELETE on
// /api/v1/organizations/:id for the Organizations collection
API.v1.addCollection(Organizations, {
  routeOptions: {
    authRequired: false
  },
  endpoints: {
    get: {
      swagger: {
        description: "Returns one organization with given ID.",
        responses: {
          "200": {
            description: "One organization"
          }
        }
      }
    },
    post: {
      swagger: {
        description: "Add organization.",
        responses: {
          "200": {
            description: "Return organization that was added."
          }
        }
      }
    },
    put: {
      swagger: {
        description: "Update organization with given ID.",
        responses: {
          "200": {
            description: "Returns updated organization."
          }
        }
      }
    },
    delete: {
      swagger: {
        description: "Delete organization with given ID.",
        responses: {
          "200": {
            description: "Successful delete."
          }
        }
      }
    },
    getAll: {
      swagger: {
        description: "Returns all organizations.",
        responses: {
          "200": {
            description: "List of organizations."
          }
        }
      }
    }
  }
});
