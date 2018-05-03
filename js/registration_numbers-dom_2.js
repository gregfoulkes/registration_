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

var storedRegTwo = localStorage.getItem('registrationsTwo') ? JSON.parse(localStorage.getItem('registrationsTwo')) : {};

console.log(storedRegTwo)

var callRegFunctionTwo = RegFunction(storedRegTwo);

function displayFunction2() {
  var regValueTwo = regTwo.value;
  regTwo.value = ''

  if (callRegFunctionTwo.addRegistration(regValueTwo)) {
    document.querySelector('.alertTwo').innerHTML = '';
    localStorage.setItem('registrationsTwo', JSON.stringify(callRegFunctionTwo.mapReg()));

    insertRegDataElem.innerHTML = regTemplate({
      regList: callRegFunctionTwo.mapReg()

    })

  } else {
    document.querySelector('.alertTwo').innerHTML = 'Please enter a valid registration number';
    return;
  }

}


window.addEventListener('load', function() {

  insertRegDataElem.innerHTML = regTemplate({
    regList: callRegFunctionTwo.mapReg()

  })

});

townSelectTwo.addEventListener('change', function() {

  insertRegDataElem.innerHTML = "";

  var filterLoop = callRegFunctionTwo.filterReg(townSelectTwo.value)

  insertRegDataElem.innerHTML = regTemplate({
    regList: filterLoop,

  })

});

clearBtnTwo.addEventListener('click', function() {
  localStorage.removeItem('registrationsTwo')
  window.location.reload()
  insertRegDataElem.innerHTML = ''
});

addBtnTwo.addEventListener('click', function() {

  displayFunction2()


});
