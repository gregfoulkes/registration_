document.addEventListener('DOMContentLoaded', function(){

  var templateSource = document.querySelector(".dislpayRegTemplate").innerHTML;

  var textTemplate = Handlebars.compile(templateSource);

  var insertDataElem = document.querySelector(".displayRegClass");

  var regData = {
    regClass: 'displayRegClass',
    regDisplay: 'displayList'


  };
  insertDataElem.innerHTML = textTemplate(regData);


});
