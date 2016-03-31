Template.singleDepartment.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current departments Id
  instance.departmentId = FlowRouter.current().params.departmentId;

  // Subscription
  instance.subscribe("singleDepartment", instance.departmentId);

  // Initialise reactive variable
  instance.editMode = new ReactiveVar(false);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular department by department Id and organization Id (for security)
      instance.department = Departments.findOne(instance.departmentId);
    }
  });
};

Template.singleDepartment.events({
  'click #edit-department': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Initialize medium editor
    instance.departmentEditor = new MediumEditor('.editable', {
      toolbar: false,
      disableReturn: true,
      disableExtraSpaces: true
    });

    // Update reactive variable
    instance.editMode.set(true);
  },
  'click #cancel-edit': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get existing organization text
    const department = instance.department;

    // Deconstruct medium-editor
    instance.departmentEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);

    // Reset UI text to current value
    $('#department-name').text(department.name);
    $('#department-description').text(department.description);
  },
  'click #update-department': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization reference
    const departmentId = instance.departmentId;

    // Update organization data
    Departments.update(departmentId, {
      $set: {
        name: $('#department-name').text(),
        description: $('#department-description').text()
      }
    });

    // Deconstruct medium-editor
    instance.departmentEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);
  },
  "click #create-service": function () {

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization reference
    const departmentId = instance.departmentId;

    // Show the create organization modal
    Modal.show('createService', {departmentId});
  }
});

Template.singleDepartment.helpers({
  department: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.department;
  },
  "editMode": function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get reactive var value
    return instance.editMode.get();
  }
});
