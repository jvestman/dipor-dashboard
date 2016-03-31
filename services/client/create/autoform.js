AutoForm.addHooks("createServiceForm", {
  "before": {
    "insert": function (service) {
      // Get current User ID
      const userId = Meteor.userId();

      if (userId) {
        // Add current user as service owner
        service.ownerIds = [userId];

        // Proceed with form submission
        return service;
      }
    }
  },
  "onSuccess": function () {
    // Hide the create service modal
    Modal.hide('createService');
  }
});
