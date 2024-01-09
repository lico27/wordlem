# Wordlem Pseudocode

## HTML

### Landing page

- Make 'How to Play' and 'Play' buttons
- Logo and brief intro
- Date

### Game page

- Make grid layout for game div - container-fluid maybe
- 5 columns x 6 rows
- Make keyboard layout
  - Row 1 - 10 tiles
  - Row 2 - 9 tiles
  - Row 3 - 9 tiles with first and last at 1.5 width
- Make navbar with 3 buttons: ✅
  - Instructions ✅
  - Stats ✅
  - Settings ✅
- Make instructions inside a modal to pop up on page open and when Instructions button(s) clicked
- Make stats modal to populate via JS
- <span style="color:red">Make settings modal</span>
- Light and dark mode

### Instructions

- Appear in modal
- <span style="color:red">Pops up after clicking play for the first time but not again - setting saved</span>
- Generated from buttons on landing and game pages
- Closing modal starts the game when coming from landing page

## CSS

- Make classes for each colour of tile:
  - Green
  - Yellow
  - Dark grey
  - Light grey (keyboard)

## JavaScript

- Make or import array of 5 letter words
- Make guess counter
- Choose a word at random
- Event listener on keyboard div
- When keyboard key clicked:
  - Add letter to next tile in game grid - border brightens/dims (light or dark mode)
  - <span style="color:red">Subtle bounce animation effect</span>
- When DELETE clicked:
  - Remove last tile from grid - border dims/brightens
- When ENTER clicked:
  - <span style="color:red">Check if actually a word - dictionary API?</span>
  - Check against letters in word
  - Change colour of tile and keys depending on inclusion/placement in word - border matches tile fill colour
  - <span style="color:red">Animation - tiles flip over</span>
  - Guess counter++
- Keep going while letters are unmatched
- When word is discovered:
  - <span style="color:red">Wave animation</span>
  - Popup with different word depending on number of guesses:
    1. Genius
    2. Magnificent
    3. Impressive
    4. Splendid
    5. Great
    6. Phew
  - Stop game
  - Add guess total to stats if <= 6

- If not a word:
  - Shudder animation
  - 'Not in word list' popup