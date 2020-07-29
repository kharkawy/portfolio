function main() {
  displayArrow();
}
document.addEventListener("DOMContentLoaded", main);

function displayArrow() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      document.querySelector(".to-the-top").style.opacity = "1";
    } else {
      document.querySelector(".to-the-top").style.opacity = "0";
    }
  });
}
