
const letters = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M"
];

let count = 0; // Total clicks counter
let wordChoice = []; // Array to keep track of clicked letters
let lettersClicked = new Set(); // Set to keep track of letters clicked

for (let i = 0; i < letters.length; i++) {
  let key = $("#" + letters[i]);
  key.on("click", function (event) {

    // Check if this letter has already been clicked
    if (!lettersClicked.has(letters[i])) {
      wordChoice.push(letters[i]);
      $('.tile:empty:first').text(letters[i]);
      lettersClicked.add(letters[i]);
      count++;

      // Stop all keys from being clickable after 5 clicks
      if (count >= 5) {
        $(".key").off("click");
      }

      // Stop this key from being clickable again
      $(this).off("click");
    }
  });
}

console.log(wordChoice);