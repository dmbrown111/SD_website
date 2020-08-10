//CSS Animation Version//
function toggleMenu() {
  var menuContentContainer = document.getElementById("menuContentContainer");
  var burgerButton = document.getElementById("burgerButton");

  menuContentContainer.classList.toggle("open");
  burgerButton.classList.toggle("open");
}

document.getElementById("burgerButton").addEventListener("click", toggleMenu);

//JavaScript Animation Version//

// function openMenu(){
//   document.getElementById("menuContentContainer").animate([
//     {transform: 'translateY(-305px)'},
//     {transform: 'translateY(0px)'}
//   ],{duration:1000, iteration:Infinity})

// }
// document.getElementById("burgerButton").addEventListener("click", openMenu);
