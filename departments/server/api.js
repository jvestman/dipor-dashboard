// Generates: GET, POST on /api/v1/departments and GET, PUT, DELETE on
// /api/v1/departments/:id for the Departments collection
API.v1.addCollection(Departments, {
  routeOptions: {
    authRequired: true
  },
  endpoints: {
    get: {
      swagger: {
        description: "Returns one department with given ID.",
        responses: {
          "200": {
            description: "One department"
          }
        }
      }
    },
    post: {
      swagger: {
        description: "Add department.",
        responses: {
          "200": {
            description: "Return department that was added."
          }
        }
      }
    },
    put: {
      swagger: {
        description: "Update department with given ID.",
        responses: {
          "200": {
            description: "Returns updated department."
          }
        }
      }
    },
    delete: {
      swagger: {
        description: "Delete department with given ID.",
        responses: {
          "200": {
            description: "Successful delete."
          }
        }
      }
    },
    getAll: {
      swagger: {
        description: "Returns all departments.",
        responses: {
          "200": {
            description: "List of departments."
          }
        }
      }
    }
  }
});

// Maps to: /api/v1/organizations/:id/departments
API.v1.addRoute('organizations/:id/departments', {authRequired: true}, {
  get: {
    swagger: {
      description: "Returns all departments of given organization ID.",
      responses: {
        "200": {
          description: "List of departments."
        }
      }
    },
    action: function () {
      // Get organizationId from URL parameters
      const organizationId = this.urlParams.id;
      // Fetch all departments of the given organization
      const departments = Departments.find({ "organizationId": organizationId }).fetch();

      return departments;
    }
  }
});
