// Hamburger Menu Trigger
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// JQuery
$(".menus").mouseenter(function () {
  $(".menus-img").animate({
    width: "300px",
  });
});
$(".menus").mouseleave(function () {
  $(".menus-img").animate({
    width: "200px",
  });
});
