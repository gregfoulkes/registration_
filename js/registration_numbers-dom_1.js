var townSelect = document.querySelector('.regSelect');
var reg = document.querySelector('.regTextandNum');
var addBtn = document.querySelector('.addRegButton');
var regDisplay = document.querySelector('.displayReg');
var displayList = document.querySelector('.regList');
var clearBtn = document.querySelector('.clearRegButton')

var storedNumbers = localStorage.getItem('registrations') ? JSON.parse(localStorage.getItem("registrations")) : {};
var callRegFunction = RegFunction(storedNumbers);

function createReg(regNum) {
  let list = document.createElement('li');
  list.textContent = regNum;
  regDisplay.appendChild(list);
}

function displayFunction1() {
  var regValue = reg.value.trim();
  reg.value = ''

  if (callRegFunction.addRegistration(regValue)) {
    document.querySelector('.alert').innerHTML = '';
    localStorage.setItem('registrations', JSON.stringify(callRegFunction.mapReg()));
    createReg(regValue)

  } else {
    document.querySelector('.alert').innerHTML = 'Please enter a valid registration number';
    return;
  }

}
addBtn.addEventListener('click', function() {
  displayFunction1();

});

window.addEventListener('load', function() {

  let regLoop = Object.keys(storedNumbers)

  if (regLoop.length > 0) {
    for (var i = 0; i < regLoop.length; i++) {
      createReg(regLoop[i])
    }
  }
});

townSelect.addEventListener('change', function() {

  regDisplay.innerHTML = "";
  var filterLoop = callRegFunction.filterReg(townSelect.value)

  if (filterLoop.length > 0) {
    for (var i = 0; i < filterLoop.length; i++) {
      createReg(filterLoop[i])
    }
  }
});

clearBtn.addEventListener('click', function() {
  localStorage.clear()
  window.location.reload()
  regDisplay.innerHTML = ''
});
