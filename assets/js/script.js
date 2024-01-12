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
        let key = $("#" + letters[i]);
        let count1 = 0;
        key.on("click", function (event) {
            console.log(letters[i]);
            count1++;
            $('.tile:empty:first').text(letters[i]);
            if (count1 >= 5) {
                $(this).off(event);
              }
        });
      };

    for (let j = 10; j < 19; j++) {
        kbRow2.append("<button class='key' id='" + letters[j] + "'>" + letters[j] + "</button>"); 
      };

    for (let k = 19; k < 26; k++) {
        kbRow3.prepend("<button class='key' id='" + letters[k] + "'>" + letters[k] + "</button>"); 
        
    };

    kbRow3.prepend("<button class='key-wide' id='Enter'>ENTER</button>");
    kbRow3.append("<button class='key-wide' id='Delete'>" + "<i class='fas fa-delete-left fa-2x'></i>" + "</button>")
};

makeKeyboard();