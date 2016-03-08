Meteor.methods({
  "addOrganizationMember": function (details) {
    // Destructure details into local variables
    const {email, organizationId} = details;

    // Find user given email
    const userAccount = Accounts.findUserByEmail(email);


    if (!userAccount) {
      throw new Meteor.Error( 500, 'Could not find user' );
    }

    //console.log(userAccount);
  }
});
