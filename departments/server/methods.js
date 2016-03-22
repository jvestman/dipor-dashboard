Meteor.methods({
  "addDepartmentMember": function (details) {
    // Destructure details into local variables
    const {email, departmentId} = details;

    // Find user by given email
    const userAccount = Accounts.findUserByEmail(email);

    // If user account does not exist, throw error
    if (!userAccount) {
      throw new Meteor.Error( 500, 'Could not find user' );
    } else {
      // Get user ID
      const userId = userAccount._id;

      // Get department by ID
      const department = Departments.findOne(departmentId);

      // Make sure current user is department administrator
      if ( department.currentUserIsAdmin() ) {
        // Add user ID to department member IDs array
        Departments.update(departmentId, {
          $addToSet: {
            "memberIds": userId
          }
        });
      }
    }
  }
});
