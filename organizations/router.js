FlowRouter.route('/organizations', {
  name: 'allOrganizations',
  action: function (params) {
    BlazeLayout.render("mainLayout", { main: "allOrganizations" });
  }
});

FlowRouter.route('/organization/:organizationId', {
  name: 'singleOrganization',
  action: function (params) {
    BlazeLayout.render("mainLayout", { main: "singleOrganization" });
  }
});
