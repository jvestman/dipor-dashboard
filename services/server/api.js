// Generates: GET, POST on /api/v1/organizations and GET, PUT, DELETE on
// /api/v1/organizations/:id for the Organizations collection
API.v1.addCollection(Services, {
  routeOptions: {
    authRequired: false
  },
  endpoints: {
    get: {
      swagger: {
        tags: [
          API.v1.swagger.tags.service
        ],
        description: "Returns one service with given ID.",
        parameters: [
          API.v1.swagger.params.serviceId
        ],
        responses: {
          "200": {
            description: "One service"
          }
        }
      }
    },
    post: {
      swagger: {
        tags: [
          API.v1.swagger.tags.service
        ],
        description: "Add service.",
        parameters: [
          API.v1.swagger.params.service
        ],
        responses: {
          "200": {
            description: "Return service that was added."
          }
        }
      }
    },
    put: {
      swagger: {
        tags: [
          API.v1.swagger.tags.service
        ],
        description: "Update service with given ID.",
        parameters: [
          API.v1.swagger.params.serviceId
        ],
        responses: {
          "200": {
            description: "Returns updated service."
          }
        }
      }
    },
    delete: {
      swagger: {
        tags: [
          API.v1.swagger.tags.service
        ],
        description: "Delete service with given ID.",
        parameters: [
          API.v1.swagger.params.serviceId
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
          API.v1.swagger.tags.service
        ],
        description: "Returns all services.",
        responses: {
          "200": {
            description: "List of services."
          }
        }
      }
    }
  }
});

// Maps to: /api/v1/organizations/:id/services
API.v1.addRoute('organizations/:id/services', {authRequired: false}, {
  get: {
    swagger: {
      tags: [
        API.v1.swagger.tags.organization,
        API.v1.swagger.tags.service
      ],
      description: "Returns all services of given organization ID.",
      parameters: [
        API.v1.swagger.params.organizationId
      ],
      responses: {
        "200": {
          description: "List of services."
        }
      }
    },
    action: function () {
      // Get organizationId from URL parameters
      const organizationId = this.urlParams.id;
      // Fetch all departments of the given organization
      const departments = Departments.find({ "organizationId": organizationId }).fetch();

      // Loop through departments to get the services in organization
      let services = _.map(departments, function(department) {
        // Get departmentId
        const departmentId = department._id;
        // Return array of services of the given department
        return Services.find({ "departmentId": departmentId }).fetch();
      });

      // Flatten nested array of arrays
      services = _.flatten(services);

      // Build response
      const response = {
        status: "success",
        data: services
      }
      return response;
    }
  }
});

// Maps to: /api/v1/departments/:id/services
API.v1.addRoute('departments/:id/services', {authRequired: false}, {
  get: {
    swagger: {
      tags: [
        API.v1.swagger.tags.department,
        API.v1.swagger.tags.service
      ],
      description: "Returns all services of given department ID.",
      parameters: [
        API.v1.swagger.params.departmentId
      ],
      responses: {
        "200": {
          description: "List of services."
        }
      }
    },
    action: function () {
      // Get departmentId from URL parameters
      const departmentId = this.urlParams.id;
      // Fetch all services of the given department
      const services = Services.find({ "departmentId": departmentId }).fetch();

      // Build response
      const response = {
        status: "success",
        data: services
      }
      return response;
    }
  }
});
