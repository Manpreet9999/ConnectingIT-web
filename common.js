// for Scroll Up

const  btnscrollup = document.querySelector('#btnscrollup');
    btnscrollup.addEventListener("click", function(){
    //  window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
    behavior: 'smooth'

    });
    
    });





var user = document.getElementById('icon');
var text = document.getElementById('caution');
var usr = document.getElementById('usrname');
var tel = document.getElementById('usrtel');
var adreess = document.getElementById('usradress');
var usrlastname = document.getElementById('usrlast');
var usrmail = document.getElementById('usrmail');







function validationname() {
  var firstname = document.getElementById('usernamefield').value;
  if (firstname.length == 0) {
    usr.innerHTML = 'First Name is required'
    usr.style.color = 'Red';

    return false;

  }
  if (firstname.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    usr.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i> First name is required';
    usr.style.color = 'red';
    return false;
  }

  if (!isNaN(firstname)) {
    usr.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>Only Character'
    usr.style.color = 'Red';
    return false;
  }

  usr.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
  usr.style.color = 'yellowgreen';
  return true;


}


function validationphone() {
  var teleno = document.getElementById('telfield').value;
  if (teleno.length == 0) {
    tel.innerHTML = 'Mobile no is required'
    tel.style.color = 'Red';

    return false;

  }
  if (isNaN(teleno)) {
    tel.innerHTML = ' <i class="fa fa-times-circle" aria-hidden="true"></i> only Numeric Value'
    tel.style.color = 'Red';
    return false;
  }
  if (!isNaN(teleno)) {
    tel.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    tel.style.color = 'yellowgreen';
    return true;
  }
}

function validationaddress() {
  var useraddress = document.getElementById('adressfield').value;
  if (useraddress.length == 0) {
    adreess.innerHTML = 'Address is required'
    adreess.style.color = 'Red';

    return false;

  }
  if (isNaN(useraddress)) {
    adreess.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    adreess.style.color = 'yellowgreen';
    return true;
  }
}

function validationlastname() {
  var userlastname = document.getElementById('lastfield').value;
  if (userlastname.length == 0) {
    usrlastname.innerHTML = 'Last Name is required'
    usrlastname.style.color = 'Red';

    return false;

  }
  if (!isNaN(userlastname)) {
    usrlastname.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i> Only Character Value';
    usrlastname.style.color = 'red';
    return false;
  }
  if (isNaN(userlastname)) {
    usrlastname.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
    usrlastname.style.color = 'yellowgreen';
    return false;
  }

}

function validationmil() {
  var usermail = document.getElementById('mailfield').value;
  if (usermail.length == 0) {
    usrmail.innerHTML = 'Mail is required'
    usrmail.style.color = 'Red';

    return false;

  }
  if (!isNaN(usermail)) {

    usrmail.innerHTML = ' <i class="fa fa-times-circle" aria-hidden="true"></i>Only Character'
    usrmail.style.color = 'Red';
    return false;
  }

  if (!usermail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    usrmail.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i> Write full a mail';
    usrmail.style.color = 'red';
    return false;
  }
  usrmail.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfull Filled';
  usrmail.style.color = 'yellowgreen'
  return true;
}

function submit() {
  if (!validationname() || !validationphone() || !validationaddress() || !validationlastname() || !validationmil()) {
    usrsubmit.innerHTML = "Fill out all required fields";
    usrsubmit.style.color = 'red';

    return false;
  }
}








function validation() {
  var name = document.getElementById('namefield').value;
  if (name.length == 0) {
    text.innerHTML = 'Email is required'
    icon.style.color = 'Red';
    text.style.color = 'Red';
    return false;


  }
  if (!isNaN(name)) {
    icon.style.color = 'Red';
    text.innerHTML = 'Only Character'
    text.style.color = 'Red';
    return false;
  }

  if (!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    icon.style.color = 'Red';
    text.innerHTML = 'Email is required'
    text.style.color = 'Red';
    return false;
  }
  text.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Sucessfully Filled';
  icon.style.color = 'yellowgreen';
  text.style.color = 'yellowgreen';
  return true;

}

function submited() {
  if (!validation()) {
    usrerror.innerHTML = "Fix error";
    return false;
  }
}


//buttton Mobements

const btnop1 = document.getElementById("allbutton");
const btnop2 = document.getElementById("button-1");
const btnop3 = document.getElementById("button-2");
const btnop4 = document.getElementById("button-3");
const btnop5 = document.getElementById("button-4");
const btnop6 = document.getElementById("button-6");
const btnop7 = document.getElementById("button-7");
const btnopmimss = document.getElementById("button-5");







const textone = document.getElementById("opntext-1");
const texttwo = document.getElementById("opntext-2");
const textthree = document.getElementById("opentext-3");
const textfour = document.getElementById("opentext-4");
const textfive = document.getElementById("opentext-5");
const textsix = document.getElementById("opentext-6");
const textseven = document.getElementById("opentext-7");
const textmiss = document.getElementById("openmiss");








btnop1.onclick = function () {

  textone.style.display = "block";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "none";








  btnop2.style.backgroundColor = "white";
  btnop1.style.backgroundColor = "rgb(222, 255, 144";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";







}
btnop2.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "block";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "none";


  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "rgb(222, 255, 144";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";





}
btnop3.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "block";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "none";



  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "rgb(222, 255, 144";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";





}
btnop4.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "block";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "none";



  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "rgb(222, 255, 144";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";



}
btnop5.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "block";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "none";





  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "rgb(222, 255, 144";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";



}
btnop6.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "block";
  textseven.style.display = "none";
  textmiss.style.display = "none";





  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "rgb(222, 255, 144";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "white";




}
btnop7.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "block";
  textmiss.style.display = "none";






  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "rgb(222, 255, 144";
  btnopmimss.style.backgroundColor = "white";



}
btnopmimss.onclick = function () {

  textone.style.display = "none";
  texttwo.style.display = "none";
  textthree.style.display = "none";
  textfour.style.display = "none";
  textfive.style.display = "none";
  textsix.style.display = "none";
  textseven.style.display = "none";
  textmiss.style.display = "block";






  btnop1.style.backgroundColor = "white";
  btnop2.style.backgroundColor = "white";
  btnop3.style.backgroundColor = "white";
  btnop4.style.backgroundColor = "white";
  btnop5.style.backgroundColor = "white";
  btnop6.style.backgroundColor = "white";
  btnop7.style.backgroundColor = "white";
  btnopmimss.style.backgroundColor = "rgb(222, 255, 144";

}


// skiils validation
function validationskills() {
  var usernme = document.getElementById('namefield').value;

  if (usernme.length == 0) {
    text.innerHTML = 'Email is required';
    icon.style.color = 'Red';
    text.style.color = 'Red';
    return false;
  }
  if (!isNaN(usernme)) {
    icon.style.color = 'Red';
    text.innerHTML = 'Only Character';
    text.style.color = 'Red';
    return false;
  }

  if (!usernme.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    icon.style.color = 'Red';
    text.innerHTML = 'Email is required';
    return false;
  }


  icon.style.color = 'yellowgreen';
  text.style.color = 'yellowgreen';

  return true;

}

function submitedd() {
  if (!validationskills()) {
    usrerror.innerHTML = "Fix error";
    return false;
  }
}



function openForm() {
  document.getElementsByClassName("main-form").style.display = "block";
}

function closeForm() {
  document.getElementsByClassName("main-form").style.display = "none";
}

