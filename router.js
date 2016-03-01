FlowRouter.route('/organization/:organizationId', {
    name: 'organizationView',
    action: function(params) {
        BlazeLayout.render("mainLayout", { main: "organizationView" });
    }
});