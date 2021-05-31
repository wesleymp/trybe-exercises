window.onload = function() {
  const bodyHTML = document.querySelector("body");
  const contentHTML = document.querySelector(".content");
  const bgColor = document.querySelector("#bgColor");
  const textColor = document.querySelector("#textColor");
  const textSize = document.querySelector("#textSize");
  const textLineHeight = document.querySelector("#textLineHeight");
  const textFontFamily = document.querySelector("#textFontFamily");

  function executeStorage() {
    bodyHTML.style.backgroundColor = localStorage.getItem("bgColor");
    contentHTML.style.color = localStorage.getItem("textColor");
    contentHTML.style.fontSize = localStorage.getItem("textSize");
    contentHTML.style.lineHeight = localStorage.getItem("textLineHeight");
    contentHTML.style.fontFamily = localStorage.getItem("textFontFamily");
  }

executeStorage();

  bgColor.addEventListener("keypress", function(keyPress){
    if (keyPress.key === "Enter") {
      localStorage.setItem("bgColor", bgColor.value);
      bodyHTML.style.backgroundColor = bgColor.value;
    }
  });

  textColor.addEventListener("keypress", function(keyPress){
    if (keyPress.key === "Enter") {
      localStorage.setItem("textColor", textColor.value);
      contentHTML.style.color = textColor.value;
    }
  });

  textSize.addEventListener("keypress", function(keyPress){
    if (keyPress.key === "Enter") {
      localStorage.setItem("textSize", textSize.value);
      contentHTML.style.fontSize = textSize.value;
    }
  });

  textLineHeight.addEventListener("keypress", function(keyPress){
    if (keyPress.key === "Enter") {
      localStorage.setItem("textLineHeight", textLineHeight.value);
      contentHTML.style.lineHeight = textLineHeight.value;
    }
  });

  textFontFamily.addEventListener("keypress", function(keyPress){
    if (keyPress.key === "Enter") {
      localStorage.setItem("textFontFamily", textFontFamily.value);
      contentHTML.style.fontFamily = textFontFamily.value;
    }
  });

}