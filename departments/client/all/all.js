Template.organizationDepartments.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  // Subscribe to allOrganizations publication
  instance.subscribe('organizationDepartments', instance.organizationId);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {
      instance.departments = Departments.find({organizationId: instance.organizationId});
    }
  });
};

Template.organizationDepartments.helpers({
  organizationDepartments: function () {

    var instance = Template.instance();

    var departments = instance.departments;

    console.log(departments)

    return departments;
  }
});
