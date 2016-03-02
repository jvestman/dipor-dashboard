Template.allOrganizationsView.created = function () {

    // Get reference to template instance
    var instance = this;

    // Subscribe to allOrganizations publication
    instance.subscribe('allOrganizations');

};

Template.allOrganizationsView.helpers({
    allOrganizations: function () {

        return Organizations.find();
    }
});