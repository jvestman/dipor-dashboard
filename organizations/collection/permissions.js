// Logged in user may create organization
Organzations.permit('insert').apply();

// Administrator role can delete
Organizations.permit('delete').ifHasRole("admin").apply();

Security.defineMethod("ifUserIsOrganizationAdmin", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, organization) {
    // Get a list of organization admins
    const adminIds = organization.adminIds;

    // Check if user is organization admin
    return _.contains(adminIds, userId);
  }
});
