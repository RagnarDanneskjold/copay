//
// test/unit/controllers/controllersSpec.js
//
describe("Unit: Testing Controllers", function() {

  beforeEach(angular.mock.module('copay'));

  it('should have a AddressesController controller', function() {
    expect(copayApp.AddressesController).not.to.equal(null);
  });

  it('should have a BackupController controller', function() {
    expect(copayApp.Backupcontroller).not.to.equal(null);
  });

  it('should have a HeaderController controller', function() {
    expect(copayApp.HeaderController).not.to.equal(null);
  });

  it('should have a SendController controller', function() {
    expect(copayApp.SendController).not.to.equal(null);
  });

  it('should have a SetupController controller', function() {
    expect(copayApp.SetupController).not.to.equal(null);
  });

  it('should have a SigninController controller', function() {
    expect(copayApp.SigninController).not.to.equal(null);
  });

  it('should have a TransactionsController controller', function() {
    expect(copayApp.TransactionsController).not.to.equal(null);
  });

});
