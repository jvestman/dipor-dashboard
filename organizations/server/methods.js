Meteor.methods({
  "addOrganizationMember": function (details) {
    // Destructure details into local variables
    const {email, organizationId} = details;

    // Find user by given email
    const userAccount = Accounts.findUserByEmail(email);

    // If user account does not exist, throw error
    if (!userAccount) {
      throw new Meteor.Error( 500, 'Could not find user' );
    } else {
      // Get user ID
      const userId = userAccount._id;

      // Get organization by ID
      const organization = Organizations.findOne(organizationId);

      // Make sure current user is organization administrator
      if (organization.currentUserIsAdmin()){
        // Add user ID to organization member IDs array
      }
    }
  }
});
