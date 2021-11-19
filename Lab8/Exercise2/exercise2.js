function forward(){
  var currentPic = document.getElementById("SlideShow").src;
  var currentPic = currentPic.replace(/^.*[\\\/]/, '');
  switch (currentPic) {
    case "Number1.png":
      document.getElementById("SlideShow").src = "./images/Number2.png";
      break;
    case "Number2.png":
      document.getElementById("SlideShow").src = "./images/Number3.png";
      break;
    case "Number3.png":
      document.getElementById("SlideShow").src = "./images/Number4.png";
      break;
    case "Number4.png":
      document.getElementById("SlideShow").src = "./images/Number5.png";
      break;
    case "Number5.png":
      document.getElementById("SlideShow").src = "./images/Number1.png";
      break;
    default:
      break;
  }
}
function back(){
  var currentPic = document.getElementById("SlideShow").src;
  var currentPic = currentPic.replace(/^.*[\\\/]/, '');
  switch (currentPic) {
    case "Number1.png":
      document.getElementById("SlideShow").src = "./images/Number5.png";
      break;
    case "Number2.png":
      document.getElementById("SlideShow").src = "./images/Number1.png";
      break;
    case "Number3.png":
      document.getElementById("SlideShow").src = "./images/Number2.png";
      break;
    case "Number4.png":
      document.getElementById("SlideShow").src = "./images/Number3.png";
      break;
    case "Number5.png":
      document.getElementById("SlideShow").src = "./images/Number4.png";
      break;
    default:
      break;
  }
}
