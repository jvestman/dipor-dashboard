FlowRouter.route('/organizations', {
    name: 'allOrganizationsView',
    action: function(params) {
        BlazeLayout.render("mainLayout", { main: "allOrganizationsView" });
    }
});