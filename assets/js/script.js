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

const letters = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M"
];

let wordList = wordListLower.map(function(item) {
  return item.toUpperCase();
  });

let count = 0; // count clicks
let clickedLettersAsArray = []; // keep track of letters
let isWord;
const correctWord = wordList[Math.floor(Math.random() * wordList.length)]; // choose a random word to be the correct guess
const correctWordAsArray = correctWord.split(""); // make correct word into array of letters
console.log(correctWord);

// hide 'not a word' popover
function popoverTimeout(notWordAlert) {
  setTimeout(function() {
    notWordAlert.hide();
  }, 2000);
  }

// call dictionary API
function checkIsWord(wordChoice) {
  let queryIsWord = "https://api.dictionaryapi.dev/api/v2/entries/en/" + wordChoice;
  return fetch(queryIsWord)
    .then(function (dictResponse) {
      if (dictResponse.ok) {
        // check for no 404 errors
        return true;
      } else {
        return false;
      }
    })
    // catch other errors
    .catch(function (error) {
      console.error("There was an error:", error);
      return false;
    });
    };

// check guess and change tiles accordingly 
function submitGuess(clickedLettersAsArray, correctWordAsArray, wordChoice) {
  checkIsWord(wordChoice).then(function(isWord) {
  if (isWord) {
    for (let i = 0; i < correctWordAsArray.length; i++) {
      if (correctWordAsArray[i] === clickedLettersAsArray[i]) {
        $("#tile-" + i).addClass("green");     
      } 
      
      else if (correctWordAsArray.includes(clickedLettersAsArray[i])) {
        console.log("yellow")
        $("#tile-" + i).addClass("yellow");

      } else {
        console.log("no");
        $("#tile-" + i).addClass("dark-grey");
      }
    }
  } else {
    // show 'not a word' popover for 2 seconds
    const notWordAlert = new mdb.Popover($("#not-word-alert"));
    notWordAlert.show();
    popoverTimeout(notWordAlert);
  }
})};

function guessWord() {
  for (let i = 0; i < letters.length; i++) {
    let key = $("#" + letters[i]);
    let enterKey = $("#enter");
  
    key.on("click", function (event) {
      // Push the clicked letter to the array
      clickedLettersAsArray.push(letters[i]);
      $('.tile:empty:first').text(letters[i]).attr("id", "tile-" + (clickedLettersAsArray.length - 1));
      count++;

      // Convert the array to a string
       let wordChoice = clickedLettersAsArray.join("");
  
            // TODO: del function - count--
            // select last non-empty tile
            // $('.tile:not(:empty):last')

      // Stop all keys from being clickable after 5 clicks
      if (count >= 5) {
        $(".key").off("click");
        enterKey.on("click", function (event) {
          submitGuess(clickedLettersAsArray, correctWordAsArray, wordChoice);
        })
  
      }
    });
  }
}

guessWord();


// event.preventDefault();



