function member() {
    document.getElementById('memberbtn').style.color= "#DEDFDF";
    document.getElementById('memberbtn').style.backgroundColor= "#4C5C6A";
    document.getElementById('trainerbtn').style.color= "#4C5C6A";
    document.getElementById('trainerbtn').style.backgroundColor="transparent";
    document.getElementById('trainerbtn').style.borderStyle="solid";
    document.getElementById('trainerbtn').style.borderColor="4C5C6A";
    document.getElementById("dropdown").style.display ='block';
    document.getElementById("speciality").style.display ='none';
}
function trainer() {
    document.getElementById('trainerbtn').style.color= "#DEDFDF";
    document.getElementById('trainerbtn').style.backgroundColor= "#4C5C6A";
    document.getElementById('memberbtn').style.color= "#4C5C6A";
    document.getElementById('memberbtn').style.backgroundColor="transparent";
    document.getElementById('memberbtn').style.borderStyle="solid";
    document.getElementById('memberbtn').style.borderColor="4C5C6A";
    document.getElementById("speciality").style.display ='block';
    document.getElementById("dropdown").style.display ='none';
}
function validateForm() {
  var fn = document.forms["signupform"]["fullname"].value;
  var email = document.forms["signupform"]["email"].value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  var un = document.forms["signupform"]["username"].value;
  var pw = document.forms["signupform"]["password"].value;
  var pwl = document.forms["signupform"]["password"].value.length;
  var rpw = document.forms["signupform"]["repeatpassword"].value;
  var sp = document.forms["signupform"]["speciality"].value;
  if (fn == "") {
      document.getElementById("fullnameerror").style.display ='block';
      return false;
  }

  if (email == "") {
    document.getElementById("fullnameerror").style.display ='none';
      document.getElementById("emailerror").style.display ='block';
      return false;
  }
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    document.getElementById("fullnameerror").style.display ='none';
    document.getElementById("emailerror").style.display ='none';
      document.getElementById("emailerror2").style.display ='block';
      return false;
  }
  if (un == "") {
    document.getElementById("fullnameerror").style.display ='none';
    document.getElementById("emailerror").style.display ='none';
    document.getElementById("emailerror2").style.display ='none';
      document.getElementById("usernameerror").style.display ='block';
      return false;
  }
  if (pwl < 6) {
    document.getElementById("fullnameerror").style.display ='none';
    document.getElementById("emailerror").style.display ='none';
    document.getElementById("emailerror2").style.display ='none';
    document.getElementById("usernameerror").style.display ='none';
      document.getElementById("passworderror").style.display ='block';
      return false;
  }
  if (rpw != pw ) {
    document.getElementById("fullnameerror").style.display ='none';
    document.getElementById("emailerror").style.display ='none';
    document.getElementById("emailerror2").style.display ='none';
    document.getElementById("usernameerror").style.display ='none';
    document.getElementById("passworderror").style.display ='none';
      document.getElementById("repeatpassworderror").style.display ='block';
      return false;
  }
  if (sp == "") {
    document.getElementById("fullnameerror").style.display ='none';
    document.getElementById("emailerror").style.display ='none';
    document.getElementById("emailerror2").style.display ='none';
    document.getElementById("usernameerror").style.display ='none';
    document.getElementById("passworderror").style.display ='none';
      document.getElementById("repeatpassworderror").style.display ='none';
      document.getElementById("specialityerror").style.display ='block';
      return false;
  }
  document.getElementById("fullnameerror").style.display ='none';
  document.getElementById("emailerror").style.display ='none';
  document.getElementById("emailerror2").style.display ='none';
  document.getElementById("usernameerror").style.display ='none';
  document.getElementById("passworderror").style.display ='none';
    document.getElementById("repeatpassworderror").style.display ='none';
    document.getElementById("specialityerror").style.display ='none';
    alert("An account has been made for you. Please log in.");
    window.location="logIn.html";
  return true;
}