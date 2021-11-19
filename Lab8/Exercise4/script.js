function changeBorder() {
  var redAmount = document.getElementById("BorderRed").value;
  var blueAmount = document.getElementById("BorderBlue").value;
  var greenAmount = document.getElementById("BorderGreen").value;
  var widthAmount = document.getElementById("BorderWidth").value;

  var paragraph = document.getElementById("paragraph");
  paragraph.style.borderColor= "rgb("+redAmount + ","+greenAmount + ","+blueAmount+")";
  paragraph.style.borderWidth = widthAmount;
}

function changeBackground() {
  var redAmount = document.getElementById("BackgroundRed").value;
  var blueAmount = document.getElementById("BackgroundBlue").value;
  var greenAmount = document.getElementById("BackgroundGreen").value;

  var paragraph = document.getElementById("paragraph");
  paragraph.style.backgroundColor= "rgb("+redAmount + ","+greenAmount + ","+blueAmount+")";
}
