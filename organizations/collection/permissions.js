// Logged in user may create organization
Organizations.permit('insert').apply();

// System administrator role may update or delete
Organizations.permit(["update", "delete"]).ifHasRole("admin").apply();

// Organization administrator(s) may delete or update
Organizations.permit(["update", "delete"]).ifUserIsOrganizationAdmin().apply()


// Define method to check if user is organization admin
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
