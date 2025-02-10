function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Test",
    autoStart: true,
    delay: 1,
    Cursor: "",
  });
}

let poemFormElement = document.querySelector("#german-poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
