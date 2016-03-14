Template.organizationDepartments.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = instance.data.organizationId;

  // Subscribe to allOrganizations publication
  instance.subscribe('organizationDepartments', instance.organizationId);
  instance.subscribe('singleOrganization', instance.organizationId);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {

      // Get all departments for particular organization
      instance.departments = Departments.find({organizationId: instance.organizationId});

      // Get organization
      instance.organization = Organizations.findOne(instance.organizationId);
    }
  });
};

Template.organizationDepartments.helpers({
  'organizationDepartments': function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.departments;
  },
  'organization': function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.organization;
  }
});

Template.organizationDepartments.events({
  'click #create-department': function (event) {

    // Show create department modal
    Modal.show('createDepartment');
  }
})
