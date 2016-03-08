Template.addOrganizationMember.events({
  "submit #add-member-form": function (event, template) {
    // Prevent the form from submitting
    event.preventDefault();

    // Hide the add organization member modal
    Modal.hide("addOrganizationMember");
  }
});
