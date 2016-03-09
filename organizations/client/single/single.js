Template.singleOrganization.created = function () {
  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  // Subscribe to singleOrganization publication and pass organization Id
  instance.subscribe('singleOrganization', instance.organizationId);

  // Subscribe to organization member profiles
  instance.subscribe("organizationMembers", instance.organizationId);

  // Initialise reactive variable
  instance.editMode = new ReactiveVar(false);
};

Template.singleOrganization.onRendered(function () {
  // Get reference to template instance
  const instance = this;

  instance.autorun(function () {
    // Get value of edit mode reactive variable
    const editMode = instance.editMode.get();

    if (editMode) {
      // Initialize medium editor
      instance.organizationEditor = new MediumEditor('.editable', {
        toolbar: false,
        disableReturn: true,
        disableExtraSpaces: true
      });
    } else {
      if (instance.organizationEditor) {
        // Destroy the inline editor
        instance.organizationEditor.destroy();
      }
    }
  });
});

Template.singleOrganization.helpers({
  organization: function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get organization
    const organization = Organizations.findOne(instance.organizationId);

    // Fetch organization data and pass current organization Id
    return organization;
  },
  editOrganizationMode: function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get reactive var value
    return instance.editMode.get();
  }
});

Template.singleOrganization.events({
  'click #editOrganizationMode': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Update reactive variable
    instance.editMode.set(true);
  },
  'click #cancelEditOrganizationMode': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Update reactive variable
    instance.editMode.set(false);

    // Reset UI text to current value
    $('#organizationName').text(organization.name);
    $('#organizationDescription').text(organization.description);
  },
  'click #updateOrganization': function (event) {
    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get organization reference
    const organizationId = instance.organizationId;

    // Get organization values from page
    const organizationName = $('#organizationName').text();
    const organizationDescription = $('#organizationDescription').text();

    // Temporarily reset page text
    // TODO: Figure out why page text duplicates without these two lines
    $('#organizationName').text("");
    $('#organizationDescription').text("");

    // Update organization data
    Organizations.update(organizationId, {
      $set: {
        name: organizationName,
        description: organizationDescription,
        updatedAt: new Date()
      }
    });

    // Deconstruct medium-editor
    instance.organizationEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);
  }
});
