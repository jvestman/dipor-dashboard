AutoForm.addHooks("createDepartmentForm", {
  "before": {
    "insert": function (department) {

      // Get current organization Id
      const organizationId = FlowRouter.current().params.organizationId;

      // Add current organization to department
      department.organizationId = organizationId;

      // Get current User ID
      const userId = Meteor.userId();

      if (userId) {
        // Add current user as department administrator
        department.administratorIds = [userId];

        // Proceed with form submission
        return department;
      }
    }
  },
  "onSuccess": function () {
    // Hide the create department modal
    Modal.hide('createDepartment');
  }
});
