Template.singleDepartment.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current departments Id
  instance.departmentId = FlowRouter.current().params.departmentId;

  // Subscription
  instance.subscribe("singleDepartment", instance.departmentId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular department by department Id and organization Id (for security)
      instance.department = Departments.findOne(instance.departmentId);
    }
  });
};

Template.singleDepartment.helpers({
  department: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.department;
  }
});
