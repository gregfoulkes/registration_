

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
var clearBtnTwo = document.querySelector('.clearButtonTwo')
var addBtnTwo = document.querySelector('.addRegButtonTwo')


// template references

var regTemplateSource = document.querySelector(".dislpayRegTemplate").innerHTML;

var regTemplate = Handlebars.compile(regTemplateSource);

var insertRegDataElem = document.querySelector(".displayRegClass");

// storage references

var storedRegTwo = localStorage.getItem('registrationsTwo') ? JSON.parse(localStorage.getItem("registrationsTwo")) : {};
var callRegFunction = RegFunction(storedRegTwo);

function displayFunction2() {
  var regValue = regTwo.value;
  regTwo.value = ''

  if (callRegFunction.addRegistration(regValue)) {
    document.querySelector('.alertTwo').innerHTML = '';
    localStorage.setItem('registrationsTwo', JSON.stringify(callRegFunction.mapReg()));

    insertRegDataElem.innerHTML = regTemplate({
      regList:  callRegFunction.mapReg()

    })

  } else {
    document.querySelector('.alertTwo').innerHTML = 'Please enter a valid registration number';
    return;
  }

}


window.addEventListener('load', function() {

  let regLoop = Object.keys(storedRegTwo)

  insertRegDataElem.innerHTML = regTemplate({
    regList:  callRegFunction.mapReg()

  })

});

townSelectTwo.addEventListener('change', function() {

  insertRegDataElem.innerHTML = "";

  var filterLoop = callRegFunction.filterReg(townSelectTwo.value)

  insertRegDataElem.innerHTML = regTemplate({
    regList: filterLoop,

  })

});

clearBtnTwo.addEventListener('click', function() {
  //localStorage.clear()
  localStorage.removeItem('registrationsTwo')
  window.location.reload()
  insertRegDataElem.innerHTML = ''
});

addBtnTwo.addEventListener('click', function() {

  displayFunction2()

  // var regData = {
  //   regClass: 'displayRegClass',
  //   regDisplay:  createReg()
  //
  // };
  //
  // function createReg() {
  //   var regValue = regTwo.value
  //   callRegFunction.addRegistration(regValue)
  //   localStorage.setItem('registrations', JSON.stringify(callRegFunction.mapReg()));
  //
  //   let list = document.createElement('li');
  //   list.textContent = regValue;
  //   return insertRegDataElem.appendChild(list);
  // }
  //
  // return regTemplate(regData);

});
