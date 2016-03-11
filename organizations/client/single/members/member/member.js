Template.organizationMember.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Get member ID from template instance
  instance.memberId = instance.data.memberId;

  // Subscribe to organization members
  instance.subscribe("organizationMember", instance.memberId);
});

Template.organizationMember.helpers({
  "memberEmail": function () {
    // Get reference to template instance
    const instance = Template.instance();

    if (instance.subscriptionsReady) {
      const member = Meteor.users.findOne(instance.memberId);

      // Make sure member is available,
      // since Meteor.users.findOne may return an empty array
      if (member) {
        // Get primary member email address
        const memberEmail = member.emails[0].address;

        return memberEmail;
      }
    }
  }
});
