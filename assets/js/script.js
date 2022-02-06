let deckArr = ["1 of Spades", "2 of Spades", "3 of of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades"
,"1 of Hearts", "2 Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts"
,"1 of Clubs", "2 Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 Clubs", "9 of Clubs", "10 of Clubs"
,"1 of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds",
"J of Diamonds", "Q of Diamonds", "K of Diamonds", "A of Diamonds","J of Clubs", "Q of Clubs", "K of Clubs", "A of Clubs","J of Hearts", "Q of Hearts", "K of Hearts", "A of Hearts","J of Spades", "Q of Spades", "K of Spades", "A of Spades"];

const startingButtonEl = document.createElement("button");
const startingDivEl = document.getElementById("startMatchContainer");
startingButtonEl.textContent = "Wanna play a game partner?";
startingButtonEl.id = "startMatchButton";

function getStartingHand(deckArr, num) {
    const shuffled = [...deckArr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
};

console.log(getStartingHand(deckArr, 2));

let dealWithTheDevil = function() {
    startingDivEl.appendChild(startingButtonEl);
};

dealWithTheDevil();

let aDangerousGame = function() {
    let removeStart = document.getElementById("startMatchButton");
    removeStart.remove;
};

let removeStart = document.getElementById("startMatchButton");
startingButtonEl.addEventListener("click", aDangerousGame(event));


/* on start of site have wanna play a game button display
upon clickig the button run two functions
one function removes the initial button
the next is the game function

the game function with have the dealer random pick 3 cards from the deckArr
those random 3 will be displayed
if the player wants to keep going they can click a button which will grab another random card
if they want to keep playing they can click the button again which with be the final random card

if they choose to bow out they lose and return to the main button asking to start again

if the last till the end the game a function will be called that checks the value of the hand and the table
depending on the total value the player is awarded a certain number of points

once the player reaches a higher level of points example 1000 the background image changes
a cowboy with his gun drawn wil be the new background and a alert will prompt
your a cheatin sonva betch! bang bang bang!

then the game restarts with 0 points and back at the starting screen*/