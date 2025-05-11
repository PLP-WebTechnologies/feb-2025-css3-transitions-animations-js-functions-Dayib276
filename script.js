const button = document.getElementById("animateButton");

if (localStorage.getItem("animationTriggered") === "true") {
  button.classList.add("bounce-animation");
}

button.addEventListener("click", () => {
  button.classList.add("bounce-animation");
  button.classList.add("clicked");
  localStorage.setItem("animationTriggered", "true");

  setTimeout(() => {
    button.classList.remove("bounce-animation");
  }, 500); // Match duration of the animation
});
