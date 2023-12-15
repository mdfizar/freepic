// welcome massage -----!!
var messageContainer = document.getElementById("welcomeMassege");
var firstMassege = document.getElementById("firstMassege");
  document.onreadystatechange = function() {
    if (document.readyState === "complete") {
       setTimeout(() => {
        messageContainer.style.display = "none";
       }, 2000);
    }
  };
// search by imge--------!!
// popup or popup close button------!!
  function selectImg() {
    var popup = document.getElementById("popup");
    var overlay =document.getElementById("overlay");
    var bodyOverflowHidden = document.getElementsByTagName("body")[0];
    if(popup.style.display ==="none" && overlay.style.display ==="none" && bodyOverflowHidden.style.overflowY ==="scroll") {
      popup.style.display="block";
      overlay.style.display ="block";
      bodyOverflowHidden.style.overflowY ="hidden";
    } else{
      popup.style.display ="none";
      overlay.style.display= "none";
      bodyOverflowHidden.style.overflowY ="scroll";
    }
  }
