describe('Filter registration numbers', function() {
  it('Should return registrations from Cape Town only ', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CA 4321')
    callFunction.addRegistration('CAW 4321')
    callFunction.addRegistration('CD 4321')




    //var storedReg = callFunction.mapReg()


    assert.deepEqual(callFunction.filterReg('CA '), ['CA 1234', 'CA 4321'])

  });

  it('Should return registrations from Bellville only ', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CL 1234')
    callFunction.addRegistration('CD 4321')


    //var storedReg = callFunction.mapReg()

    assert.deepEqual(callFunction.filterReg('CY '), ['CY 1234'])

  });

  it('Should return registrations from George only ', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CAW 1234')
    callFunction.addRegistration('CD 4321')

    //var storedReg = callFunction.mapReg()

    assert.deepEqual(callFunction.filterReg('CAW'), ['CAW 1234'])

  });

  it('Should return registrations from Stellenbosch only ', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CL 1234')
    callFunction.addRegistration('CD 4321')

    //var storedReg = callFunction.mapReg()

    assert.deepEqual(callFunction.filterReg('CL '), ['CL 1234'])

  });

  it('Should return all registrations', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CL 1234')
    callFunction.addRegistration('CD 4321')

    //var storedReg = callFunction.mapReg()

    assert.deepEqual(callFunction.filterReg('All'), ['CA 1234', 'CY 1234', 'CL 1234'])

  });
});

describe('Map registration numbers', function() {
  it('Should Map registration numbers from CA', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CD 4321')


    assert.deepEqual(callFunction.mapReg(), [
      'CA 1234']
    )
  });
  it('Should return registrations from CA and registrations from CY', function() {

    var callFunction = RegFunction();
    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CD 4321')


    assert.deepEqual(callFunction.mapReg(), [
      'CA 1234',
      'CY 1234'
    ])
  });

  it('Should return registrations from CA, CY and CL', function() {

    var callFunction = RegFunction();
    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CY 1234')
    callFunction.addRegistration('CL 1234')
    callFunction.addRegistration('CD 4321')

    assert.deepEqual(callFunction.mapReg(), [
      'CA 1234',
      'CY 1234',
      'CL 1234'
    ])
  });
});

describe('Sort registration numbers', function() {
  it('Should return true if registration number from CA', function() {
    var callFunction = RegFunction();

    assert.equal(callFunction.addRegistration('CA 1234'), true)
  });

  it('Should return true if registration number from CY', function() {
    var callFunction = RegFunction();

    assert.equal(callFunction.addRegistration('CY 1234'), true)
  });

  it('Should return true if registration number from CL', function() {
    var callFunction = RegFunction();

    assert.equal(callFunction.addRegistration('CL 1234'), true)
  });

  it('Should return true if registration number from CAW', function() {
    var callFunction = RegFunction();

    assert.equal(callFunction.addRegistration('CAW 1234'), true)
  });

  it('Should return false if registration number from anywhere else', function() {
    var callFunction = RegFunction();

    assert.equal(callFunction.addRegistration('CJ 1234'), false)
  });
});
