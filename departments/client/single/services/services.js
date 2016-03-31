Template.departmentServices.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Get department ID from template data context
  instance.departmentId = instance.data.department._id;
});
