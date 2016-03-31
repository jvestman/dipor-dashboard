Template.singleService.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current service Id
  instance.serviceId = FlowRouter.current().params.serviceId;

  // Subscribe to singleService publication
  instance.subscribe("singleService", instance.serviceId);
};

Template.singleService.helpers({
  service () {

    // Get reference to template instance
    const instance = Template.instance();

    // Fetch service by Id and return
    return Services.findOne(instance.serviceId);
  }
});
