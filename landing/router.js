// Front page route
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "landing" });
  }
});
