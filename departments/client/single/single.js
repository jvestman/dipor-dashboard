Template.singleDepartment.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current organization & departments Ids
  instance.departmentId = FlowRouter.current().params.departmentId;

  // Subscriptions
  instance.subscribe("allOrganizations");
  instance.subscribe("singleDepartment", instance.departmentId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular department by department Id and organization Id (for security)
      instance.department = Departments.findOne({_id: instance.departmentId});

    }
  });
};

Template.singleDepartment.helpers({
  organization: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return Organizations.findOne(instance.department.organizationId);
  },
  department: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.department;
  }
});
