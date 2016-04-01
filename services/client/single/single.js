Template.singleService.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current service Id
  instance.serviceId = FlowRouter.current().params.serviceId;

  // Subscribe to singleService publication
  instance.subscribe("singleService", instance.serviceId);

  // Initialise reactive variable to track editMode state
  instance.editMode = new ReactiveVar(false);

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.service = Services.findOne(instance.serviceId);
    }
  });
};

Template.singleService.helpers({
  service () {

    // Get reference to template instance
    const instance = Template.instance();

    // Return service object
    return instance.service;
  },
  editMode () {

    // Get reference to template instance
    const instance = Template.instance();

    // Return edit mode reactive variable (boolean)
    return instance.editMode.get();
  }
});

Template.singleService.events({
  'click #edit-service': function (event) {

    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Initialize medium editor
    instance.serviceEditor = new MediumEditor('.editable', {
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

    // Get existing service object
    const service = instance.service;

    // Deconstruct medium-editor
    instance.serviceEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);

    // Reset UI text to current value
    $('#service-name').text(service.name);
    $('#service-description').text(service.description);
    $('#service-version').text(service.version);
    $('#service-status').text(service.status);

  },
  'click #update-service': function (event) {

    event.preventDefault();

    // Get reference to template instance
    const instance = Template.instance();

    // Get service id reference
    const serviceId = instance.serviceId;

    // Update service data
    Services.update(serviceId, {
      $set: {
        name: $('#service-name').text(),
        description: $('#service-description').text(),
        version: $('#service-version').text(),
        status: $('#service-status').text()
      }
    });

    // Deconstruct medium-editor
    instance.serviceEditor.destroy();

    // Update reactive variable
    instance.editMode.set(false);
  }
})
