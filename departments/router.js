FlowRouter.route('/department/:departmentId', {
  name: 'singleDepartment',
  action: function (params) {
    BlazeLayout.render("mainLayout", { main: "singleDepartment" });
  }
});
