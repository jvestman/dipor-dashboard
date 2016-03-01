Template.singleOrganizationView.created = function () {

    var instance = this;

    instance.organizationId = FlowRouter.current().params.organizationId;

    instance.subscribe('singleOrganization', instance.organizationId);

};

Template.singleOrganizationView.helpers({
    singleOrganization: function () {

        var instance = Template.instance();

        return Organizations.findOne(instance.organizationId);
    }
});