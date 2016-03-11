Template.organizationMembers.onCreated(function(){
  // Get reference to template instance
  const instance = this;

  // Get organization Id that was passed to a template
  instance.organizationId = instance.data.organizationId;

  // Subscribe to organization members
  instance.subscribe("organizationMembers", instance.organizationId);
  
});

Template.organizationMembers.events({
  "click #add-member": function () {

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization Id
    const organizationId = instance.organizationId;

    // Show the add member modal
    Modal.show("addOrganizationMember", {organizationId});
  }
});

Template.organizationMembers.helpers({
  "organization": function () {

    // Get reference to a template instance
    const instance = Template.instance();

    // Return organization with provided otganization Id
    return Organizations.findOne(instance.organizationId);
  }
});