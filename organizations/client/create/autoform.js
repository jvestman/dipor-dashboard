AutoForm.addHooks("createOrganizationForm", {
  "before": {
    "insert": function (organization) {
      // Get current User ID
      const userId = Meteor.userId();

      if (userId) {
        // Add current user as organization administrator
        organization.administratorIds = [userId];

        // Proceed with form submission
        return organization;
      }
    }
  },
  "onSuccess": function () {
    // Hide the create organization modal
    Modal.hide('createOrganization');
  }
});
