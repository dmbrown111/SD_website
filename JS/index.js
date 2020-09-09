//CSS Animation Version//
function toggleMenu() {
  var t0 = performance.now();

  // var menuContentContainer = document.getElementById("menuContentContainer");
  // var burgerButton = document.getElementById("burgerButton");

  // menuContentContainer.classList.toggle("open");
  // burgerButton.classList.toggle("open");

  var nav_toggles = document.getElementsByClassName("nav_toggle");

  for (var index = 0; index < nav_toggles.length; index++) {
    nav_toggles[index].classList.toggle("open");
  }

  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
}

document.getElementById("burgerButton").addEventListener("click", toggleMenu);
