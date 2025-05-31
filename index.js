//on button click

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const date = input.value ;
    console.log(date)
    output.innerHTML = randomHistoricFacts(date);
});

function randomHistoricFacts(date) {
    const apiUrl = 'https://history.muffinlabs.com/date/'+ date;

    let fact = "";
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
    const rand = Math.floor(Math.random() * data['data']['Events'].length);
    const randomFact = data['data']['Events'][rand]['text'];
    const year = data['data']['Events'][rand]['year'];
    fact = randomFact;
    console.log(fact + "    " + year);
    output.innerText = fact;
  })
  .catch(error => {
    console.error('Error:', error);
  });

    return fact;
}