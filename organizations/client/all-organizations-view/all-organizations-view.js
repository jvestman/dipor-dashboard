Template.allOrganizationsView.created = function () {

    var instance = this;

    instance.subscribe('allOrganizations');

};

Template.allOrganizationsView.helpers({
    allOrganizations: function () {

        return Organizations.find();
    }
});