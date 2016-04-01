Services.helpers({
  "currentUserIsOwner": function () {
    // Assign service instance to a variable
    const service = this;

    // Try catch wrapper in case if Meteor.userId() is undefined
    try {
      const currentUserId = Meteor.userId();

      // Check if ownerIds contain userId that was passed and returns boolean
      return _.contains(service.ownerIds, currentUserId);
    } catch(err) {
      return false;
    }
  }
});
