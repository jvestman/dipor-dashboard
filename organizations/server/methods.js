Meteor.methods({
    updateOrganization: function (organizationId, organizationData) {

        Organizations.update(organizationId, {
            $set: {
                name: organizationData.name,
                description: organizationData.description,
                updatedAt: new Date()
            }
        });

    }
});