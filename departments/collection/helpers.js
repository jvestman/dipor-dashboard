Departments.helpers({
  "currentUserIsAdmin": function () {
    // Assign department instance to a variable
    const department = this;

    // Try catch wrapper in case if Meteor.userId() is undefined
    try {
      const currentUserId = Meteor.userId();

      // Check if administratorIds contains userId that was passed and returns boolean
      return _.contains(department.administratorIds, currentUserId);
    } catch(err) {
      return false;
    }
  }
});
