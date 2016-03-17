Template.singleDepartmentBreadcrumb.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current organization & departments Ids
  instance.organizationId = FlowRouter.current().params.organizationId;
  instance.departmentId = FlowRouter.current().params.departmentId;

  instance.subscribe("singleOrganization", instance.organizationId);
  instance.subscribe("singleDepartment", instance.departmentId);

  // Create reactive variables for organization and department
  instance.organization = new ReactiveVar();
  instance.department = new ReactiveVar();

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {


      // Fetch particular organization by organization Id
      const organization = Organizations.findOne(instance.organizationId);

      // Update the organization reactive variable
      instance.organization.set(organization);

      // Fetch particular department by department Id and organization Id (for security)
      const department = Departments.findOne(instance.departmentId);

      // Update the organization reactive variable
      instance.department.set(department);
    }
  });
};

Template.singleDepartmentBreadcrumb.helpers({
  organization: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.organization.get();
  },
  department: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.department.get();
  }
});
