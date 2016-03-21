Template.singleServiceBreadcrumb.created = function () {

  const instance = this;

  instance.serviceId = FlowRouter.current().params.serviceId;

  instance.subscribe("singleService", instance.serviceId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular organization by organization Id
      instance.service = Services.findOne(instance.serviceId);
    }
  });

};

Template.singleServiceBreadcrumb.helpers({
  service () {

    const instance = Template.instance();

    return instance.service;
  }
});
