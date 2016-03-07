Template.singleOrganization.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  // Subscribe to singleOrganization publication and pass organization Id
  instance.subscribe('singleOrganization', instance.organizationId);

  // Initialise reactive variable
  instance.editOrganizationMode = new ReactiveVar(false);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {
      instance.organization = Organizations.findOne(instance.organizationId);
    }
  });
};

Template.singleOrganization.helpers({
  singleOrganization: function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Fetch organization data and pass current organization Id
    return instance.organization;
  },
  editOrganizationMode: function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get reactive var value
    return instance.editOrganizationMode.get();
  },
  currentUserIsOrganizationAdmin: function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Check if current user is organization admin using collection helper
    return instance.organization.currentUserIsAdmin();
  }
});

Template.singleOrganization.events({
  'click #editOrganizationMode': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Initialize medium editor
    instance.organizationEditor = new MediumEditor('.editable', {
      toolbar: false,
      disableReturn: true,
      disableExtraSpaces: true
    });

    // Update reactive variable
    instance.editOrganizationMode.set(true);
  },
  'click #cancelEditOrganizationMode': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get existing organization text
    const organization = instance.organization;

    // Deconstruct medium-editor
    instance.organizationEditor.destroy();

    // Update reactive variable
    instance.editOrganizationMode.set(false);

    // Reset UI text to current value
    $('#organizationName').text(organization.name);
    $('#organizationDescription').text(organization.description);
  },
  'click #updateOrganization': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization reference
    const organizationId = instance.organizationId

    // Update organization data
    Organizations.update(organizationId, {
      $set: {
        name: $('#organizationName').text(),
        description: $('#organizationDescription').text(),
        updatedAt: new Date()
      }
    });

    // Deconstruct medium-editor
    instance.organizationEditor.destroy();

    // Update reactive variable
    instance.editOrganizationMode.set(false);
  }
});
