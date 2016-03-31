Template.departmentServices.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Get department ID from template data context
  instance.departmentId = instance.data.departmentId;

  instance.subscribe("departmentServices", instance.departmentId)
});

Template.departmentServices.helpers({
  department () {
    // Get reference to template instance
    const instance = this;

    // Get current department using ID
    const department = Departments.findOne(instance.departmentId);

    return department;
  }
});
