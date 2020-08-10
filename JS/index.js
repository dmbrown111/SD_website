//CSS Animation Version//
function toggleMenu() {
  var menuContentContainer = document.getElementById("menuContentContainer");
  var burgerButton = document.getElementById("burgerButton");

  menuContentContainer.classList.toggle("open");
  burgerButton.classList.toggle("open");
}

document.getElementById("burgerButton").addEventListener("click", toggleMenu);
