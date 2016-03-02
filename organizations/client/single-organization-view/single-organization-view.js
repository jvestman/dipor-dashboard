Template.singleOrganizationView.created = function () {

    // Get reference to template instance
    var instance = this;

    // Get current organization Id
    instance.organizationId = FlowRouter.current().params.organizationId;

    // Subscribe to singleOrganization publication and pass organization Id
    instance.subscribe('singleOrganization', instance.organizationId);

    instance.editOrganizationMode = new ReactiveVar(false);

};

Template.singleOrganizationView.helpers({
    singleOrganization: function () {

        // Get reference to template instance
        var instance = Template.instance();

        // Fetch organization data and pass current organization Id
        return Organizations.findOne(instance.organizationId);
    },
    editOrganizationMode: function () {

        var instance = Template.instance();

        return instance.editOrganizationMode.get();
    }
});

Template.singleOrganizationView.events({
    'click #editOrganizationMode': function () {

        var instance = Template.instance();

        instance.organizationEditor = new MediumEditor('.editable', {
            toolbar: false,
            disableReturn: true,
            disableExtraSpaces: true
        });

        instance.editOrganizationMode.set(true);

    },
    'click #cancelEditOrganizationMode': function () {

        var instance = Template.instance();

        instance.organizationEditor.destroy();

        instance.editOrganizationMode.set(false);

    },
    'click #updateOrganization': function (event) {

        event.preventDefault();

        var instance = Template.instance();

        var organizationName = $('#organizationName').text();
        var organizationDescription = $('#organizationDescription').text();

        var organizationData = {
            name: organizationName,
            description: organizationDescription
        };

        Meteor.call('updateOrganization', instance.organizationId, organizationData, function (err) {

            if (err) throw new Meteor.Error(err);

        });

        instance.organizationEditor.destroy();

        instance.editOrganizationMode.set(false);

    }
});