let btn = document.querySelector(".btn");
let input = document.getElementById("input");
let meaningContainer = document.getElementById("meaningContainer");

let api = "https://api.dictionaryapi.dev/api/v2/entries/en/worse";

btn.addEventListener("click", () => {
  let inputData = input.value;
  fetchData(inputData);
  input.value = "";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let inputData = input.value;
    fetchData(inputData);
    input.value = "";
  }
});

async function fetchData(inputData) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`
    );
    const data = await res.json();
    let text = data[0];
    let value = text.meanings[0].definitions[0].definition;
    meaningContainer.textContent = value;
  } catch (error) {
    console.log(error);
  }
}
