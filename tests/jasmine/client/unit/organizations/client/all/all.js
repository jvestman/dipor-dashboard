'use strict';

describe('test helpers of allOrganizations', function() {

  it('tests if Organization.find() is called once in allOrganizations helper', function() {
    spyOn(Organizations, 'find').and.callThrough();
    Template.allOrganizations.__helpers[' allOrganizations']();
    expect(Organizations.find.calls.count()).toBe(1);
  });

  it('tests if the click #create-organization event calls Modal.show()', function() {
    spyOn(Modal, 'show').and.callThrough();
    Template.allOrganizations.fireEvent('click #create-organization');
    expect(Modal.show.calls.count()).toBe(1);
  });

  it('tests the argument is passed to Modal.show() in click #create-organization event', function() {
    spyOn(Modal, 'show').and.callThrough();
    Template.allOrganizations.fireEvent('click #create-organization');
    expect(Modal.show.calls.argsFor(0)).toEqual(['createOrganization']);
  });
});
