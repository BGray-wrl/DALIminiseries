

const revealButton = document.getElementById("buttonnn");
const hiddenMessage = document.getElementById("hidden-message");


revealButton.addEventListener("click", () => {
    hiddenMessage.classList.remove("hidden");
    revealButton.textContent = "You sure clicked me";
  });