document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 100);
  });
});
