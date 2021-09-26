function Test1Function() {
    var x = document.getElementById("form1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else 
    x.style.display = "none";
  }


function Test3Function() {
    var m = document.getElementById("form2");
  if (m.style.display === "none") {
    m.style.display = "block";
  } else 
    m.style.display = "none";
  }

function validateForm1() {

    var x = document.forms["forms1"]["fname"].value;
    var y = document.forms["forms1"]["phone"].value;
    var z = document.forms["forms1"]["mail"].value;

    if (x == "" || y == "" || z == "" ) {
      alert("Please check if you've filled all mandatory fields");
      return false;
    }

    var m= document.getElementById("less").checked;
    var n= document.getElementById("more").checked;

    if (m == false && n == false) {
      alert("Please select capital available for investment");
      return false;
    }

    
    var b= document.getElementById("city1").checked;
    var c= document.getElementById("city2").checked;
    var d= document.getElementById("city3").checked;
    var e= document.getElementById("city4").checked;
    var f= document.getElementById("city5").checked;
    var g= document.getElementById("city6").checked;
    var h= document.getElementById("city7").checked;

    if (b == false && c == false && d == false && e == false && f == false && g == false && h==false ) {
      alert("Please select the cities you want to open a franchise in");
      return false;
    }
    document.getElementById("franchise_form").reset()
  }
  
function validateForm2() {

    var x = document.forms["forms2"]["fname1"].value;
    var y = document.forms["forms2"]["phone1"].value;
    var z = document.forms["forms2"]["mail1"].value;
    var l = document.forms["forms2"]["hello"].value;
    
    if (x == "" || y == "" || z == "" || l == "" ) {
      alert("Please check if you've filled all mandatory fields");
      return false;
    }

    document.getElementById("careers_form").reset()
      }


function allnumeric1(inputtxt) {
   
  var numbers = /^[0-9]+$/;

      if(inputtxt.value.match(numbers) && inputtxt.value.length==10) {
      document.forms1.phone.focus();
      return true; }
      
      else {
      alert('Please enter a valid phone number');
      return false;
      }
   }

function allnumeric2(inputtxt) {

  var numbers = /^[0-9]+$/;

  if(inputtxt.value.match(numbers) && inputtxt.value.length==10) {
  document.forms2.phone1.focus();
  return true; }
      
  else {
  alert('Please enter a valid phone number');
  document.forms2.phone1.focus();
  return false;
    }
   }

function validatemail1(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(inputText.value.match(mailformat))
{
document.forms1.mail.focus();
return true;
}
else
{
alert("Please enter a valid email address");

document.forms1.mail.focus();
return false;
}
}

function validatemail2(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.forms2.mail1.focus();
return true;
}
else
{
alert("Please enter a valid email address");

document.forms2.mail1.focus();
return false;
}
}

function allLetter1(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
        document.forms1.fname.focus();
      return true;
      }
      else
      {
      alert('Please enter a valid name');
      document.forms1.fname.focus();
      return false;
      }
      }

function allLetter2(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
        document.forms2.fname1.focus();
      return true;
      }
      else
      {
      alert('Please enter a valid name');
      document.forms2.fname1.focus();
      return false;
      }
      }

      var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



