// User profle page route
FlowRouter.route('/profile', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "profile" });
  }
});
