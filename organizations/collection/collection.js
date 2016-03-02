Organizations = new Mongo.Collection("organizations");

Organizations.helpers({
    currentUserIsAdmin: function () {

        // Assign organization instance to a variable
        var organization = this;

        // Try catch wrapper in case if Meteor.userId() is undefined
        try {

            var currentUserId = Meteor.userId();

            // Check if administratorIds contains userId that was passed and returns boolean
            return _.contains(organization.administratorIds, currentUserId);

        } catch(err) {

            return false;
        }
    }
});
