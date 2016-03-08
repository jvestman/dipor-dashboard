Template.organizationMembers.events({
  "click #add-member": function () {
    // Get reference to template instance
    const instance = Template.instance();

    const organizationId = instance.data.organization._id;

    // Show the add member modal
    Modal.show("addOrganizationMember", {organizationId});
  }
});
