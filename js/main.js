
const fullMenu = document.getElementById("full-menu");
const showMenu = document.getElementById("show-menu");
const closeBtn = document.getElementById("close-btn");

showMenu.addEventListener("click", () => {
  fullMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  fullMenu.classList.remove("show");
});