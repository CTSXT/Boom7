import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".image");
  button.addEventListener("click", () => {
    button.style.transform = "scale(2)";
  });
});
