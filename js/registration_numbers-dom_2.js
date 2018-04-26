

// dom 1 references

var townSelect = document.querySelector('.regSelect');
var reg = document.querySelector('.regTextandNum');
var addBtn = document.querySelector('.addRegButton');
var regDisplay = document.querySelector('.displayReg');
var displayList = document.querySelector('.regList');
var clearBtn = document.querySelector('.clearRegButton')

// dom 2 references

var townSelectTwo = document.querySelector('.regSelectTwo');
var regTwo = document.querySelector('.regTextandNumTwo');
var displayList = document.querySelector('.regList');
var clearBtnTwo = document.querySelector('.clearRegButtonTwo')
var addBtnTwo = document.querySelector('.addRegButtonTwo')


// template references

var regTemplateSource = document.querySelector(".dislpayRegTemplate").innerHTML;

var regTemplate = Handlebars.compile(regTemplateSource);

var insertRegDataElem = document.querySelector(".displayRegClass");

// storage references

var storedRegTwo = localStorage.getItem('registrations') ? JSON.parse(localStorage.getItem("registrations")) : {};
var callRegFunction = RegFunction(storedNumbers);

// functions

// function createReg(regNum) {
//   let list = document.createElement('li');
//   list.textContent = regNum;
//   regDisplay.appendChild(list);
// }

function displayFunction() {
  var regValue = reg.value.trim();
  reg.value = ''

  if (callRegFunction.addRegistration(regValue)) {
    document.querySelector('.alertTwo').innerHTML = '';
    localStorage.setItem('registrations', JSON.stringify(callRegFunction.mapReg()));
    createReg(regValue)

  } else {
    document.querySelector('.alertTwo').innerHTML = 'Please enter a valid registration number';
    return;
  }

}
// addBtn.addEventListener('click', function() {
//   displayFunction();
//
// });

window.addEventListener('load', function() {

  let regLoop = Object.keys(storedNumbers)

  if (regLoop.length > 0) {
    for (var i = 0; i < regLoop.length; i++) {
      createReg(regLoop[i])
    }
  }
});

townSelect.addEventListener('change', function() {

  insertRegDataElem.innerHTML = "";
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
  insertRegDataElem.innerHTML = ''
});

addBtnTwo.addEventListener('click', function() {

  var regData = {
    regClass: 'displayRegClass',
    regDisplay:  createReg()

  };

  function createReg() {
    var regValue = regTwo.value
    callRegFunction.addRegistration(regValue)
    localStorage.setItem('registrations', JSON.stringify(callRegFunction.mapReg()));

    let list = document.createElement('li');
    list.textContent = regValue;
    return insertRegDataElem.appendChild(list);
  }

  return regTemplate(regData);

});
