Template.allOrganizations.created = function () {
  // Get reference to template instance
  var instance = this;

  // Subscribe to allOrganizations publication
  instance.subscribe('allOrganizations');
};

Template.allOrganizations.helpers({
  allOrganizations: function () {
    return Organizations.find();
  }
});
