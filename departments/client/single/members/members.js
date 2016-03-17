Template.departmentMembers.onCreated(function(){
  // Get reference to template instance
  const instance = this;

  // Get department Id that was passed to a template
  instance.departmentId = instance.data.departmentId;
});

Template.departmentMembers.events({
  "click #add-member": function () {

    // Get reference to template instance
    const instance = Template.instance();

    // Get department Id
    const departmentId = instance.departmentId;

    // Show the add member modal
    Modal.show("addDepartmentMember", {departmentId});
  }
});

Template.departmentMembers.helpers({
  department: function () {

    // Get reference to a template instance
    const instance = Template.instance();

    // Return department with provided department Id
    return Departments.findOne(instance.departmentId);
  }
});
