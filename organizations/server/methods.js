Meteor.methods({
  "addOrganizationMember": function (details) {
    // Destructure details into local variables
    const {email, organizationId} = details;

    // Find user by given email
    const userAccount = Accounts.findUserByEmail(email);

    // If user account does not exist, throw error
    if (!userAccount) {
      throw new Meteor.Error( 500, 'Could not find user' );
    }

    //console.log(userAccount);
  }
});
