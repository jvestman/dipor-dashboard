Template.organizationView.created = function () {

    var instance = this;

};

Template.organizationView.rendered = function () {

    // Medium editor init
    var editableField = new MediumEditor('.editable', {
        toolbar: false
    });

};

Template.organizationView.helpers({
    organization: function () {

    }
});