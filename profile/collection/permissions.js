Meteor.users.allow({
  update: function(userId, user) {
    // Only allow user to update own username
    if (userId === user._id) {
      return true;
    } else {
      return false;
    }
  }
});
