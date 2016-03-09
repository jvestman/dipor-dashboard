// Sign in
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signIn',
  path: '/login',
  //template: 'myLogin',
  layoutTemplate: 'mainLayout',
  contentRegion: 'main'
});

// Register
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'register',
  path: '/register',
  //template: 'myLogin',
  layoutTemplate: 'mainLayout',
  contentRegion: 'main'
});
