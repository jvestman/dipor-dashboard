Template.addOrganizationMember.events({
  "submit #add-member-form": function (event, template) {
    // Prevent the form from submitting
    event.preventDefault();

    // Create object to hold details for current submission
    const details = {};

    // Get reference to template instance
    const instance = Template.instance();

    const organizationId = instance.data.organizationId;

    // Get email from form
    details.email = $("#email").val();

    // Add organization ID
    details.organizationId = organizationId;
    
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
