//on button click

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const date = input.value;
    output.innerHTML = randomHistoricFacts(date);
});

function randomHistoricFacts(date) {
    const apiUrl = 'https://history.muffinlabs.com/date/'+ date;

    const fact = "";
    // Make a GET request
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    //choose a random fact from the data
    const randomFact = data['data']['Events'][Math.floor(Math.random() * data.length)];
    fact = randomFact;
  })
  .catch(error => {
    console.error('Error:', error);
  });

    return fact;
}