FlowRouter.route('/organization/:organizationId/department/:departmentId', {
  name: 'singleDepartment',
  action: function (params) {
    BlazeLayout.render("mainLayout", { main: "singleDepartment" });
  }
});
