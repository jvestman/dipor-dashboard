// User profle page route
FlowRouter.route('/profile', {
  name: "profile",
  action: function() {
    BlazeLayout.render('mainLayout', { main: "profile" });
  }
});
