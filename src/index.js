function showResponse(response) {
    let poem = response.data.answer;
    new Typewriter("#poemBox", {
      strings: poem,
      autoStart: true,
    });
  }
  
  function getPoem() {
    let apiKey = "b041fca7a906td7b8234b9f8d05bo382";
    let context = "provide a short poem with a kitten or kittens as the subject and include the topic in the prompt";
    let prompt = "Tell me a poem about kittens";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
  }
  
  let poemForm = document.querySelector("#poemInput");
  poemForm.addEventListener("submit", getPoem);
  