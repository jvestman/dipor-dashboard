Template.singleOrganizationBreadcrumb.created = function () {

  // Get reference to template instance
  const instance = this;

  // Get current organization Id
  instance.organizationId = FlowRouter.current().params.organizationId;

  instance.subscribe("singleOrganization", instance.organizationId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {

      // Fetch particular organization by organization Id
      instance.organization = Organizations.findOne(instance.organizationId);
    }
  });
};

Template.singleOrganizationBreadcrumb.helpers({
  organization: function () {

    // Get reference to template instance
    const instance = Template.instance();

    return instance.organization;
  }
});