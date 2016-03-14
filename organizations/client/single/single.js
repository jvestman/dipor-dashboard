Template.singleOrganization.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  // Subscribe to singleOrganization publication and pass organization Id
  instance.subscribe('singleOrganization', instance.organizationId);

  // Initialise reactive variable
  instance.editMode = new ReactiveVar(false);

  instance.autorun(function () {
    if (instance.subscriptionsReady()) {
      instance.organization = Organizations.findOne(instance.organizationId);
    }
  });
};

Template.singleOrganization.helpers({
  "organization": function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Original code to get instance organization variable
    return instance.organization;
  },
  "editMode": function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get reactive var value
    return instance.editMode.get();
  }
});

Template.singleOrganization.events({
  'click #edit-organization': function (event) {
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
    instance.editMode.set(true);
  },
  'click #cancel-edit': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get existing organization text
    const organization = instance.organization;

    // Deconstruct medium-editor
    instance.organizationEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);

    // Reset UI text to current value
    $('#organization-name').text(organization.name);
    $('#organization-description').text(organization.description);
  },
  'click #update-organization': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization reference
    const organizationId = instance.organizationId

    // Update organization data
    Organizations.update(organizationId, {
      $set: {
        name: $('#organization-name').text(),
        description: $('#organization-description').text(),
        updatedAt: new Date()
      }
    });

    // Deconstruct medium-editor
    instance.organizationEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);
  }
});
