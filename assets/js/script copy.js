// Make keyboard

const letters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"
  ];

let kbRow1 = $("#kb-row1");
let kbRow2 = $("#kb-row2");
let kbRow3 = $("#kb-row3");
let wordChoice = [];

function makeKeyboard() {
    for (let i = 0; i < 10; i++) {
        // Build top row
        kbRow1.append("<button class='key' id='" + letters[i] + "'>" + letters[i] + "</button>");
        let key = $("#" + letters[i]);
        // Make keys clickable and append to tiles
            key.on("click", function (event) {
            wordChoice.push(letters[i]);
            $('.tile:empty:first').text(letters[i]);
        });
      };

    for (let j = 10; j < 19; j++) {
        // Build middle row
        kbRow2.append("<button class='key' id='" + letters[j] + "'>" + letters[j] + "</button>"); 
        let key = $("#" + letters[j]);
        // Make keys clickable and append to tiles
            key.on("click", function (event) {
            wordChoice.push(letters[j]);
            $('.tile:empty:first').text(letters[j]);
        });
      };

    for (let k = 19; k < 26; k++) {
        // Build bottom row
        kbRow3.append("<button class='key' id='" + letters[k] + "'>" + letters[k] + "</button>"); 
        let key = $("#" + letters[k]);
        // Make keys clickable and append to tiles
            key.on("click", function (event) {
            wordChoice.push(letters[k]);
            $('.tile:empty:first').text(letters[k]);
        });
      };

    kbRow3.prepend("<button class='key-wide' id='Enter'>ENTER</button>");
    kbRow3.append("<button class='key-wide' id='Delete'>" + "<i class='fas fa-delete-left fa-2x'></i>" + "</button>");
};

makeKeyboard();







            // Limit clicks to 5
            // if (count >= 5) {
            //     $(this).off(event);
            //   };
            //   console.log(wordChoice);