
const letters = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M"
];

let count = 0; // Total clicks counter
let letterArray = []; // Array to keep track of clicked letters

for (let i = 0; i < letters.length; i++) {
  let key = $("#" + letters[i]);
  key.on("click", function (event) {
    // Push the clicked letter to the array
    letterArray.push(letters[i]);
    $('.tile:empty:first').text(letters[i]);
    count++;

    // Convert the array to a string
    let wordChoice = letterArray.join("");
    console.log("wordChoice:", wordChoice);

    // Stop all keys from being clickable after 5 clicks
    if (count >= 5) {
      $(".key").off("click");
    }
  });
}


// check if word exists in English
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>

// select last non-empty tile
// $('.tile:not(:empty):last')


