Template.createService.helpers({
  departmentId () {

    // Get reference to template instance
    const instance = Template.instance();

    // Get department reference
    const departmentId = instance.data.departmentId;

    // Get department ID
    return departmentId;
  }
});
