const btnDots = document.getElementById("btnDots");
const headerIconsDots = document.querySelector(".header_icons-dots");
let isMenuOpen = false;

btnDots.addEventListener("click", () => {
  if (isMenuOpen) {
    headerIconsDots.style.display = "none";
  } else {
    headerIconsDots.style.display = "block";
  }
  isMenuOpen = !isMenuOpen;
});

document.addEventListener("click", (event) => {
  if (
    !headerIconsDots.contains(event.target) &&
    event.target !== btnDots &&
    event.target.parentElement !== btnDots
  ) {
    headerIconsDots.style.display = "none";
    isMenuOpen = false;
  }
});
