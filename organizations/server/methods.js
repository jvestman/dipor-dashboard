Meteor.methods({
    updateOrganization: function (organizationId, organizationData) {

        // Check if current user is organization admin using collection helper
        var currentUserIsOrganizationAdmin = Organizations.findOne(organizationId).currentUserIsAdmin();

        // Check if specific organization document is found
        if (currentUserIsOrganizationAdmin) {

            // Update organization data if Ok
            Organizations.update(organizationId, {
                $set: {
                    name: organizationData.name,
                    description: organizationData.description,
                    updatedAt: new Date()
                }
            });

        } else {

            // If check failed throw an error
            throw new Meteor.Error("Permission denied. Only Administrators are able to modify organizations.");
        }

    }
});