// Build keyboard
const letters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"
  ];

  function makeKeyboard() {
    for (let i = 0; i < letters.length; i++) {
        $('.key:empty:first').text(letters[i]).attr("id", letters[i]);
    };
  };

  makeKeyboard();


