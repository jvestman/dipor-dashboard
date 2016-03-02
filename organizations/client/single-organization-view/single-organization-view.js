Template.singleOrganizationView.created = function () {

    // Get reference to template instance
    var instance = this;

    // Get current organization Id
    instance.organizationId = FlowRouter.current().params.organizationId;

    // Subscribe to singleOrganization publication and pass organization Id
    instance.subscribe('singleOrganization', instance.organizationId);

    instance.editMode = new ReactiveVar(false);

};

Template.singleOrganizationView.helpers({
    singleOrganization: function () {

        // Get reference to template instance
        var instance = Template.instance();

        // Fetch organization data and pass current organization Id
        return Organizations.findOne(instance.organizationId);
    }
});