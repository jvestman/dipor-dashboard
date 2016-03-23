Template.serviceOwner.onCreated(function () {

  // Get reference to template instance
  const instance = this;

  // Get owner ID from template instance
  instance.ownerId = instance.data.ownerId;

  // Subscribe to service owner
  instance.subscribe("serviceOwner", instance.ownerId);
});

Template.serviceOwner.helpers({
  "ownerEmail": function () {

    // Get reference to template instance
    const instance = Template.instance();

    const owner = Meteor.users.findOne(instance.ownerId);

    // Make sure owner is available,
    // since Meteor.users.findOne may return an empty array
    if (owner) {

      // Get owner's primary email address
      const ownerEmail = owner.emails[0].address;

      return ownerEmail;
    }
  }
});
