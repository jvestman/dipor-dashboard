Template.organizationDepartments.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organization = instance.data.organization;

  // Subscribe to allOrganizations publication
  instance.subscribe('organizationDepartments', instance.organization._id);
  instance.subscribe('singleOrganization', instance.organization._id);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {

      // Get all departments for particular organization
      instance.departments = Departments.find({organizationId: instance.organization._id});

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
