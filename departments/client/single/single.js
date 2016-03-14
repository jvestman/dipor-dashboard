Template.singleDepartment.created = function () {

  const instance = this;

  instance.organizationId = FlowRouter.current().params.organizationId;
  instance.departmentId = FlowRouter.current().params.departmentId;

  instance.subscribe("singleOrganization", instance.organizationId);
  instance.subscribe("singleDepartment", instance.departmentId);

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {
      instance.organization = Organizations.findOne(instance.organizationId);
      instance.department = Departments.findOne(instance.departmentId);
    }
  });
};

Template.singleDepartment.helpers({
  organization: function () {

    const instance = Template.instance();

    return instance.organization;
  },
  department: function () {

    const instance = Template.instance();

    return instance.department;
  }
});
