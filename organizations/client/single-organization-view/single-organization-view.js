Template.singleOrganizationView.created = function () {

    // Get reference to template instance
    var instance = this;

    // Get current organization Id
    instance.organizationId = FlowRouter.current().params.organizationId;

    // Subscribe to singleOrganization publication and pass organization Id
    instance.subscribe('singleOrganization', instance.organizationId);

};

Template.singleOrganizationView.helpers({
    singleOrganization: function () {

        var instance = Template.instance();

        return Organizations.findOne(instance.organizationId);
    }
});