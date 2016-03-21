Template.singleService.created = function () {

  const instance = this;

  instance.serviceId = FlowRouter.current().params.serviceId;

  instance.subscribe("singleService", instance.serviceId);
};

Template.singleService.helpers({
  service () {
    const instance = Template.instance();

    return Services.findOne(instance.serviceId);
  }
});
