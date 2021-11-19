function checkMatch(){
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  if(pass1 != pass2){
    alert("The Passwords Don't Match!!!");
  }
  else if(pass1.length <8){
    alert('Your password is too short');
  }
}
