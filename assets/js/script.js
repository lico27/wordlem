const wordListLower = [
  'apple', 'grape', 'music', 'happy', 'piano',
  'earth', 'ocean', 'zebra', 'chair', 'mouse',
  'laser', 'tiger', 'skate', 'blend', 'jelly',
  'cloud', 'smile', 'queen', 'train', 'watch',
  'flame', 'hazel', 'swoop', 'globe', 'brush',
  'charm', 'cabin', 'daisy', 'shiny', 'trout',
  'swift', 'olive', 'lunar', 'sugar', 'vivid',
  'frost', 'oasis', 'lucky', 'spice', 'honey',
  'sunny', 'grain', 'tulip', 'unity', 'pouch',
  'pluck', 'mirth', 'shark', 'swirl', 'dwarf',
  'grind', 'sweep', 'joust', 'quick', 'tears',
  'blame', 'spire', 'pulse', 'ghost', 'tries',
  'plaza', 'jumbo', 'fable', 'whale', 'blaze',
  'flair', 'brave', 'graze', 'vocal', 'jewel',
  'blush', 'prize', 'gravy', 'wrist', 'dwell',
  'crown', 'flute', 'latch', 'gears', 'vault',
  'vibes', 'fluid', 'prism', 'stoke', 'beach',
  'juice', 'quilt', 'blimp', 'crisp', 'sniff',
  'sworn', 'nudge', 'snare', 'quake', 'gloom',
  'crane', 'blitz', 'stork', 'flint', 'scold',
  'chase', 'dance', 'think', 'write', 'greet',
  'laugh', 'plant', 'stare', 'slice', 'roast',
  'blink', 'dream', 'pride', 'carve', 'taste',
  'shake', 'climb', 'drive', 'break', 'stomp',
  'throw', 'catch', 'touch', 'blend', 'plead',
  'shout', 'slide', 'dwell', 'crash', 'surge', 
  'flirt', 'snore', 'glide', 'float', 'twirl',
  'satay', 'zesty', 'quirk', 'jazzy', 'plump',
  'flaky', 'brash', 'peppy', 'giddy', 'fizzy',
  'saucy', 'smoky', 'hasty', 'crumb', 'xylem',
  'glint', 'jolly', 'slyly', 'murky', 'zippy',
  'husky', 'nifty', 'sulky', 'minty', 'feral',
  'snake', 'zonal', 'pique', 'bread', 'crate', 
  'drill', 'eagle', 'flame', 'irony', 'waltz',
  'knock', 'mango', 'naval', 'pearl', 'raven', 
  'under', 'xenon', 'youth', 'azure', 'dingo',
  'ember', 'giant', 'haste', 'ivory', 'kiosk', 
  'lemon', 'maple', 'orbit', 'plumb', 'quark', 
  'robin', 'slant', 'throb', 'umbra', 'vixen',
  'badge', 'cider', 'event', 'fjord', 'heist', 
  'inbox', 'joker', 'karma', 'lodge', 'melon', 
  'novel', 'ovary', 'pivot', 'quash', 'rifle', 
  'scout', 'ultra', 'chose', 'delta', 'exalt', 
  'frond', 'valve', 'whisk', 'yeast', 'amber', 
  'brisk', 'chops', 'moose', 'blast', 'sassy'
];

let wordList = wordListLower.map(function(item) {
  return item.toUpperCase();
  });

const letters = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M"
];

let count = 0; // Total clicks counter
let letterArray = []; // Array to keep track of clicked letters
const correctWord = wordList[Math.floor(Math.random() * wordList.length)]; // choose a random word to be the correct guess
//const letterArray = ["T", "E", "N", "S", "E"] // correctWord.split("");
console.log(correctWord);
//let wordChoice = ["T", "E", "A", "R", "S"];

function submitGuess(correctWord, letterArray) {
  // if statement with API call to check word
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] == correctWord[i]) {
      console.log("yes");
      $("#tile-" + i).addClass("green");
      
    } else {
      console.log("no");
    }
    
  }
};


for (let i = 0; i < letters.length; i++) {
  let key = $("#" + letters[i]);
  let enterKey = $("#enter");

  key.on("click", function (event) {
    // Push the clicked letter to the array
    letterArray.push(letters[i]);
    $('.tile:empty:first').text(letters[i]).attr("id", "tile-" + i);
    count++;

    // Convert the array to a string
    let wordChoice = letterArray.join("");
    console.log("wordChoice:", wordChoice);

    // Stop all keys from being clickable after 5 clicks
    if (count >= 5) {
      $(".key").off("click");
      enterKey.on("click", function (event) {
        submitGuess(correctWord, letterArray);
      })

    }
  });
}


// check if word exists in English
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>

// select last non-empty tile
// $('.tile:not(:empty):last')


