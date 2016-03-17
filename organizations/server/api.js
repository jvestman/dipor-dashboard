// Generates: GET, POST on /api/v1/organizations and GET, PUT, DELETE on
// /api/v1/organizations/:id for the Organizations collection
API.v1.addCollection(Organizations, {
  routeOptions: {
    authRequired: false
  },
  endpoints: {
    get: {
      swagger: {
        tags: [
          API.tags.organization
        ],
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
        tags: [
          API.tags.organization
        ],
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
        tags: [
          API.tags.organization
        ],
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
        tags: [
          API.tags.organization
        ],
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
        tags: [
          API.tags.organization
        ],
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
