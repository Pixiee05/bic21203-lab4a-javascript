
const message = document.getElementById("message");
const button = document.getElementById("changeBtn");

button.addEventListener("click", changeMessage);

function changeMessage() {
  message.textContent = "Hello there!";
}
