AutoForm.addHooks(['updateProfile'], {
  onSuccess: function () {
    return sAlert.success('Profile updated', {position: 'bottom-right'});
  }
});

Template.profile.helpers({
  user: function() {
    return Meteor.user();
  }
});
