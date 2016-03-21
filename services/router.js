FlowRouter.route('/service/:serviceId', {
  name: 'singleService',
  action: function (params) {
    BlazeLayout.render("mainLayout", { main: "singleService", breadcrumb: "singleServiceBreadcrumb" });
  }
});
