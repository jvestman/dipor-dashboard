FlowRouter.route('/organizations', {
    name: 'allOrganizationsView',
    action: function(params) {
        BlazeLayout.render("mainLayout", { main: "allOrganizationsView" });

    }
});

FlowRouter.route('/organization/:organizationId', {
    name: 'singleOrganizationView',
    action: function (params) {
        BlazeLayout.render("mainLayout", {main: "singleOrganizationView"});
    }
});