Organizations.allow({
  insert: function () {
    return true;
  },
  update: function (userId, organization) {
    // Only allow organization administrators to edit
    return organization.currentUserIsAdmin();
  }
});
