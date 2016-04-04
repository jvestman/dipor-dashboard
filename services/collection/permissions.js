Services.allow({
  insert: function () {
    return true;
  },
  update: function (userId, service) {
    // Only allow service owners to edit
    return service.currentUserIsOwner();
  }
});
