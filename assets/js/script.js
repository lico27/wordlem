// Make keyboard

const letters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"
  ];

let kbRow1 = $("#kb-row1");
let kbRow2 = $("#kb-row2");
let kbRow3 = $("#kb-row3");

function makeKeyboard() {
    for (let i = 0; i < 10; i++) {
        kbRow1.append("<button class='key' id='" + letters[i] + "'>" + letters[i] + "</button>");
        
      };

    for (let j = 10; j < 19; j++) {
        kbRow2.append("<button class='key' id='" + letters[j] + "'>" + letters[j] + "</button>"); 
      };

    for (let k = 19; k < 26; k++) {
        kbRow3.append("<button class='key' id='" + letters[k] + "'>" + letters[k] + "</button>"); 
        
    }  
};

makeKeyboard();



