Organizations.helpers({
  currentUserIsAdmin: function () {
    // Assign organization instance to a variable
    const organization = this;

    // Try catch wrapper in case if Meteor.userId() is undefined
    try {
      const currentUserId = Meteor.userId();

      // Check if administratorIds contains userId that was passed and returns boolean
      return _.contains(organization.administratorIds, currentUserId);
    } catch(err) {
      return false;
    }
  }
});
