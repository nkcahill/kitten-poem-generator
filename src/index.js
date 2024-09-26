function showResponse(response) {
    let poem = response.data.answer;
    new Typewriter("#poemBox", {
      strings: poem,
      autoStart: true,
      cursor: "",
      delay: "natural"
    });
  }
  
  function getPoem(event) {
    event.preventDefault();
    console.log("Generating poem");
    let poemElement = document.querySelector("#poemBox");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = "Generating a kitten poem..."
    let apiKey = "b041fca7a906td7b8234b9f8d05bo382";
    let context = "Provide a 4 line poem and separate each line with a <br />. The poem should be about a kitten or kittens as the subject and include the topic in the prompt. ";
    let topic = document.querySelector("#topic");
    let prompt = `Tell me a poem about kittens and ${topic.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
  }
  
  let poemForm = document.querySelector("#poemInput");
  poemForm.addEventListener("submit", getPoem);
  