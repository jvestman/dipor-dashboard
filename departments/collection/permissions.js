Departments.allow({
  insert: function (userId, department) {
    // Only allow department administrators to insert
    return department.currentUserIsAdmin();
  },
  update: function (userId, department) {
    // Only allow department administrators to edit
    return department.currentUserIsAdmin();
  }
});
