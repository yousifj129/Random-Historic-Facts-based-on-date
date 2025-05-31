//on button click

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");
const container = document.getElementById("container");


button.addEventListener("click", () => {
    const date = input.value.trim();

    // Check if the input matches the Month/day format (e.g., 5/31 or 12/1)
    const datePattern = /^(1[0-2]|[1-9])\/(3[01]|[12][0-9]|[1-9])$/;

    if (!datePattern.test(date)) {
        output.innerHTML = "Please enter a valid date in Month/day format (e.g., 5/31)";
        return;
    }

    // Input is valid
    console.log(date);
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
    const inHtml = data['data']['Events'][rand]['html'];
    fact = randomFact;
    console.log(fact + "    " + year);
    output.innerText = fact + " - " + year;
    container.innerHTML = inHtml;
  })
  .catch(error => {
    console.error('Error:', error);
  });

    return fact;
}