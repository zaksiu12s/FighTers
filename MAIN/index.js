/*DELAY*/
const delay = async (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms))

/*MENU NAV-HAMBURGER ON MOBILES*/
function hamburgerRotate(x) {
  x.classList.toggle("change");
  var y = document.getElementsByClassName("nav-dropdown");
  for (var i = 0; i < y.length; i++) {
    y[i].classList.toggle("hamburger-active");
  }
}

/*PRZY WŁĄCZANIU STRONY*/
window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');
  document.getElementsByTagName("html")[0].style.visibility = "visible"; /*ZALADUJ PO WLACZENIU*/
  var elementsAutoWrite = document.getElementsByClassName("element-auto-write");
  async function autoWrite() {/*SMOOTH PISANIE*/
    for (i = 0; i < elementsAutoWrite.length; i++) {
      var y = ["Play Now!", "And discover a huge community!"];/*USTAWIANIE CO MA GDZIE PISAĆ*/
      loopWait(elementsAutoWrite[i], y[i]);
      await delay(y[0].length * 120 + 100);
    }
  }
  autoWrite();
});

async function loopWait(x, y) {
  var elementAutoWrite = x;
  var contentText = y;
  var trueContentText = "";
  var underspace = "_";
  for (let i = 0; i < contentText.length; i += 1) {
    if (i + 1 === contentText.length) {
      underspace = " ";
    }
    elementAutoWrite.innerHTML = (trueContentText += contentText[i]) + underspace;
    await delay(120);
  }
}
