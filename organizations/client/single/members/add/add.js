Template.addOrganizationMember.events({
  "submit #add-member-form": function (event, template) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Create object to hold details for current submission
    const details = {};

    // Add Organization ID to details object
    details.organizationId = instance.data.organizationId;

    // Add email to details object
    details.email = $("#email").val();

    // Add member to organization, checking if email is registered
    Meteor.call("addOrganizationMember", details, function (error, success) {
      if (error) {
        // Display any error to the user
        alert(error);
      }
    });

    // Hide the add organization member modal
    Modal.hide("addOrganizationMember");
  }
});
