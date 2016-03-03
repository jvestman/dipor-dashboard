Template.singleOrganizationView.created = function () {

    // Get reference to template instance
    var instance = this;

    // Get current organization Id
    instance.organizationId = FlowRouter.current().params.organizationId;

    // Subscribe to singleOrganization publication and pass organization Id
    instance.subscribe('singleOrganization', instance.organizationId);

    // Initialise reactive variable
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

        // Get reference to template instance
        var instance = Template.instance();

        // Get reactive var value
        return instance.editOrganizationMode.get();
    },
    currentUserIsOrganizationAdmin: function () {

        // Get reference to template instance
        var instance = Template.instance();

        // Check if current user is organization admin using collection helper
        return Organizations.findOne(instance.organizationId).currentUserIsAdmin();
    }
});

Template.singleOrganizationView.events({
    'click #editOrganizationMode': function (event) {

        event.preventDefault();

        // Get reference to template instance
        var instance = Template.instance();

        // Initialize medium editor
        instance.organizationEditor = new MediumEditor('.editable', {
            toolbar: false,
            disableReturn: true,
            disableExtraSpaces: true
        });

        // Update reactive variable
        instance.editOrganizationMode.set(true);

    },
    'click #cancelEditOrganizationMode': function (event) {

        event.preventDefault();

        // Get reference to template instance
        var instance = Template.instance();

        // Deconstruct medium-editor
        instance.organizationEditor.destroy();

        // Update reactive variable
        instance.editOrganizationMode.set(false);

    },
    'click #updateOrganization': function (event) {

        event.preventDefault();

        // Get reference to template instance
        var instance = Template.instance();

        // Get organization field values
        var organizationName = $('#organizationName').text();
        var organizationDescription = $('#organizationDescription').text();

        // Deconstruct medium-editor
        instance.organizationEditor.destroy();

        // Update reactive variable
        instance.editOrganizationMode.set(false);

    }
});
