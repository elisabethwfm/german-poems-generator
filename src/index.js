function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    Cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9of48ba08265c3b61efaffet394bd310";
  let prompt = `user instructions: Generate a german poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poem. Your mission is to generate a 4 line poem and separate each line with <br/><br/> and add a <br/> at the begging as well. Make sure to follow the user instructions. Sign the Poem with `<br/>~ SheCodes AI` inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#german-poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
