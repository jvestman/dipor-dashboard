Template.singleDepartmentBreadcrumb.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current organization & departments Ids
  instance.organizationId = FlowRouter.current().params.organizationId;
  instance.departmentId = FlowRouter.current().params.departmentId;

  instance.subscribe("singleOrganization", instance.organizationId);
  instance.subscribe("singleDepartment", instance.departmentId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular organization by organization Id
      instance.organization = Organizations.findOne(instance.organizationId);

      // Fetch particular department by department Id and organization Id (for security)
      instance.department = Departments.findOne(instance.departmentId);
    }
  });
};

Template.singleDepartmentBreadcrumb.helpers({
  organization: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.organization;
  },
  department: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.department;
  }
});