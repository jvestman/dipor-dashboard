Template.organizationMember.helpers({
  "memberEmail": function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get member ID from template instance
    const memberId = instance.data.memberId;

    // Get user object
    const member = Meteor.users.findOne(memberId);

    // Get primary member email address
    const memberEmail = member.emails[0].address;

    return memberEmail;
  }
})
