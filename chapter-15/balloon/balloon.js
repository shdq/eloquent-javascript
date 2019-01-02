let balloon = document.getElementsByClassName("balloon")[0];
let fontSize = 100;

document.body.style.fontSize = `${fontSize}px`;

const handler = e => {
  if (e.key == "ArrowUp") {
    e.preventDefault();
    fontSize = fontSize * 1.1;
    if (fontSize > 300) {
      balloon.textContent = "💥";
      window.removeEventListener("keydown", handler);
    }
    balloon.style.fontSize = `${fontSize}%`;
  }
  if (e.key == "ArrowDown") {
    e.preventDefault();
    fontSize = fontSize * 0.9;
    if (fontSize < 100) fontSize = 100;
    balloon.style.fontSize = `${fontSize}%`;
  }
};

window.addEventListener("keydown", handler);
