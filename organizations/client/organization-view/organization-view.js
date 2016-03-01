Template.organizationView.created = function () {

    var instance = this;

    instance.organizationId = FlowRouter.current().params.organizationId;

    instance.subscribe('singleOrganization', instance.organizationId);

};

Template.organizationView.rendered = function () {

    // Medium editor init
    var editableField = new MediumEditor('.editable', {
        toolbar: false
    });

};

Template.organizationView.helpers({
    organization: function () {

        var instance = Template.instance();

        return Organizations.findOne(instance.organizationId);
    }
});