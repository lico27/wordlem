



let kbRow1 = $("#kb-row1");
let kbRow2 = $("#kb-row2");
let kbRow3 = $("#kb-row3");


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
      
    // for (let j = 10; j < 19; j++) {
    //     // Build middle row
    //     kbRow2.append("<button class='key' id='" + letters[j] + "'>" + letters[j] + "</button>"); 
    //     let key = $("#" + letters[j]);
    //     // Make keys clickable and append to tiles
    //         key.on("click", function (event) {
    //         wordChoice.push(letters[j]);
    //         $('.tile:empty:first').text(letters[j]);
    //     });
    //   };

    // for (let k = 19; k < 26; k++) {
    //     // Build bottom row
    //     kbRow3.append("<button class='key' id='" + letters[k] + "'>" + letters[k] + "</button>"); 
    //     let key = $("#" + letters[k]);
    //     // Make keys clickable and append to tiles
    //         key.on("click", function (event) {
    //         wordChoice.push(letters[k]);
    //         $('.tile:empty:first').text(letters[k]);
    //     });
    //   };

    // kbRow3.prepend("<button class='key-wide' id='Enter'>ENTER</button>");
    // kbRow3.append("<button class='key-wide' id='Delete'>" + "<i class='fas fa-delete-left fa-2x'></i>" + "</button>");
};


// Take guessed letters and check them when Enter is clicked
function submitGuess() {
  console.log(wordChoice);
  let enterKey = $("#Enter");
  enterKey.on("click", function (event) {
    // guessed letters passed as arguments
    // guessed letters checked against word
    
  });
};



// makeKeyboard();
// submitGuess();



            // Limit clicks to 5
            // if (count >= 5) {
            //     $(this).off(event);
            //   };
            //   console.log(wordChoice);