document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu"); // Brug ".menu" i stedet for "menu"

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
