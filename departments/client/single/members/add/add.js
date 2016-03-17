Template.addDepartmentMember.events({
  "submit #add-member-form": function (event, template) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Create object to hold details for current submission
    const details = {};

    // Add department ID to details object
    details.departmentId = instance.data.departmentId;
    
    // Add email to details object
    details.email = $("#email").val();

    // Add member to department, checking if email is registered
    Meteor.call("addDepartmentMember", details, function (error, success) {
      if (error) {
        // Display any error to the user
        alert(error);
      }
    });

    // Hide the add organization member modal
    Modal.hide("addDepartmentMember");
  }
});
