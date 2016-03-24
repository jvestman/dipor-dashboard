// Generates: GET, POST on /api/v1/departments and GET, PUT, DELETE on
// /api/v1/departments/:id for the Departments collection
API.v1.addCollection(Departments, {
  routeOptions: {
    authRequired: false
  },
  endpoints: {
    get: {
      swagger: {
        tags: [
          API.v1.swagger.tags.department
        ],
        description: "Returns one department with given ID.",
        parameters: [
          API.v1.swagger.params.departmentId
        ],
        responses: {
          "200": {
            description: "One department"
          }
        }
      }
    },
    post: {
      swagger: {
        tags: [
          API.v1.swagger.tags.department
        ],
        description: "Add department.",
        parameters: [
          API.v1.swagger.params.department
        ],
        responses: {
          "200": {
            description: "Return department that was added."
          }
        }
      }
    },
    put: {
      swagger: {
        tags: [
          API.v1.swagger.tags.department
        ],
        description: "Update department with given ID.",
        parameters: [
          API.v1.swagger.params.departmentId
        ],
        responses: {
          "200": {
            description: "Returns updated department."
          }
        }
      }
    },
    delete: {
      swagger: {
        tags: [
          API.v1.swagger.tags.department
        ],
        description: "Delete department with given ID.",
        parameters: [
          API.v1.swagger.params.departmentId
        ],
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
          API.v1.swagger.tags.department
        ],
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
API.v1.addRoute('organizations/:id/departments', {authRequired: false}, {
  get: {
    swagger: {
      tags: [
        API.v1.swagger.tags.organization,
        API.v1.swagger.tags.department
      ],
      description: "Returns all departments of given organization ID.",
      parameters: [
        API.v1.swagger.params.organizationId
      ],
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

      // Build response
      const response = {
        status: "success",
        data: departments
      }
      return response;
    }
  }
});
