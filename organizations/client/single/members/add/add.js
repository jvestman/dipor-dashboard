Template.addOrganizationMember.events({
  "submit #add-member-form": function (event, template) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get email from form
    const email = $("#email").val();

    // Add member to organization, checking if email is registered
    Meteor.call("addOrganizationMember", email, function (error, success) {
      if (error) {
        // Display any error to the user
        alert(error);
      }
    });

    // Hide the add organization member modal
    Modal.hide("addOrganizationMember");
  }
});
