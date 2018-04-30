

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
// function storageTwo(){
//
//   if(localStorage['registrationsTwo']){
//   var storedRegTwo = localStorage.getItem('registrationsTwo') ? JSON.parse(localStorage.getItem('registrationsTwo')) : {};
//
//   }
// return storedRegTwo
//
// }

var storedRegTwo = localStorage.getItem('registrationsTwo') ? JSON.parse(localStorage.getItem('registrationsTwo')) : {};
var callRegFunction = RegFunction(storedRegTwo);

function displayFunction2() {
  var regValueTwo = regTwo.value;
  regTwo.value = ''

  if (callRegFunction.addRegistration(regValueTwo)) {
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
  storageTwo()

  displayFunction2()


});
