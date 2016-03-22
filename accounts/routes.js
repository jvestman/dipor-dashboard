// Sign in
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'mainLayout',
  contentRegion: 'main'
});

// Register
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'register',
  path: '/register',
  layoutTemplate: 'mainLayout',
  contentRegion: 'main'
});
