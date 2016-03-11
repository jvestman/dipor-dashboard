Template.organizationMembers.onCreated(function(){
  // Get reference to template instance
  const instance = this;

  instance.organizationId = instance.data.organization._id;

  // Subscribe to organization members
  instance.subscribe("organizationMembers", instance.organizationId);
});

Template.organizationMembers.events({
  "click #add-member": function () {
    // Get reference to template instance
    const instance = Template.instance();

    const organizationId = instance.organizationId;

    // Show the add member modal
    Modal.show("addOrganizationMember", {organizationId});
  }
});
