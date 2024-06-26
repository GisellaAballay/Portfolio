const $button = document.getElementById("theme-mode");
const $sun = document.getElementById("sun");
const $moon = document.getElementById("moon");

$button.addEventListener("click", () => {
  let displaySun = getComputedStyle($sun).display;
  if (displaySun === "none") {
    $sun.style.display = "block";  
  } else {
    $sun.style.display = "none"
  }

  let displayMoon = getComputedStyle($moon).display;
  if (displayMoon === "none") {
    $moon.style.display = "block";  
  } else {
    $moon.style.display = "none"
  }
})