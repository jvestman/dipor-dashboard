FlowRouter.route('/organization/:organizationId', {
    name: 'singleOrganizationView',
    action: function(params) {
        BlazeLayout.render("mainLayout", { main: "singleOrganizationView" });
    }
});