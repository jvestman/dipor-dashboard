Template.organizationDepartments.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  // Subscribe to allOrganizations publication
  instance.subscribe('organizationDepartments', instance.organizationId);
  instance.subscribe('singleOrganization', instance.organizationId);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {
      instance.departments = Departments.find({organizationId: instance.organizationId});
      instance.organization = Organizations.findOne(instance.organizationId);
    }
  });
};

Template.organizationDepartments.helpers({
  organizationDepartments: function () {

    const instance = Template.instance();

    return instance.departments;
  },
  organization: function () {

    const instance = Template.instance();

    return instance.organization;
  }
});
