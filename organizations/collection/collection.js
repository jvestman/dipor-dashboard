Organizations = new Mongo.Collection("organizations");

Organizations.helpers({
    userIsAdmin: function (userId) {

        // Assign organization instance to a variable
        var organization = this;

        // Check if administratorIds contains userId that was passed and returns boolean
        return _.contains(organization.administratorIds, userId);
    }
});
