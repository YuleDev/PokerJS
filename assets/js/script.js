let deckArr = ["2 of Spades", "3 of of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades"
    , "2 Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts"
    , "2 Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 Clubs", "9 of Clubs", "10 of Clubs"
    , "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds",
    "J of Diamonds", "Q of Diamonds", "K of Diamonds", "A of Diamonds", "J of Clubs", "Q of Clubs", "K of Clubs", "A of Clubs", "J of Hearts", "Q of Hearts", "K of Hearts", "A of Hearts", "J of Spades", "Q of Spades", "K of Spades", "A of Spades"];

const deckImagesArr = ["assets/images/deckOfCards/2_of_clubs.png", "assets/images/deckOfCards/2_of_diamonds.png",
    "assets/images/deckOfCards/2_of_hearts.png", "assets/images/deckOfCards/2_of_spades.png", "assets/images/deckOfCards/3_of_clubs.png",
    "assets/images/deckOfCards/3_of_diamonds.png", "assets/images/deckOfCards/3_of_hearts.png", "assets/images/deckOfCards/3_of_spades.png",
    "assets/images/deckOfCards/4_of_clubs.png", "assets/images/deckOfCards/4_of_diamonds.png", "assets/images/deckOfCards/4_of_hearts.png",
    "assets/images/deckOfCards/4_of_spades.png", "assets/images/deckOfCards/5_of_clubs.png", "assets/images/deckOfCards/5_of_diamonds.png",
    "assets/images/deckOfCards/5_of_hearts.png", "assets/images/deckOfCards/5_of_spades.png", "assets/images/deckOfCards/6_of_clubs.png",
    "assets/images/deckOfCards/6_of_diamonds.png", "assets/images/deckOfCards/6_of_hearts.png", "assets/images/deckOfCards/6_of_spades.png",
    "assets/images/deckOfCards/7_of_clubs.png", "assets/images/deckOfCards/7_of_diamonds.png", "assets/images/deckOfCards/7_of_hearts.png",
    "assets/images/deckOfCards/7_of_spades.png", "assets/images/deckOfCards/8_of_clubs.png", "assets/images/deckOfCards/8_of_diamonds.png",
    "assets/images/deckOfCards/8_of_hearts.png", "assets/images/deckOfCards/8_of_spades.png", "assets/images/deckOfCards/9_of_clubs.png",
    "assets/images/deckOfCards/9_of_diamonds.png", "assets/images/deckOfCards/9_of_hearts.png", "assets/images/deckOfCards/9_of_spades.png",
    "assets/images/deckOfCards/10_of_clubs.png", "assets/images/deckOfCards/10_of_diamonds.png", "assets/images/deckOfCards/10_of_hearts.png",
    "assets/images/deckOfCards/10_of_spades.png", "assets/images/deckOfCards/jack_of_clubs.png", "assets/images/deckOfCards/jack_of_diamonds.png",
    "assets/images/deckOfCards/jack_of_hearts.png", "assets/images/deckOfCards/jack_of_spades.png", "assets/images/deckOfCards/queen_of_clubs.png",
    "assets/images/deckOfCards/queen_of_diamonds.png", "assets/images/deckOfCards/queen_of_hearts.png", "assets/images/deckOfCards/queen_of_spades.png",
    "assets/images/deckOfCards/king_of_clubs.png", "assets/images/deckOfCards/king_of_diamonds.png", "assets/images/deckOfCards/king_of_hearts.png",
    "assets/images/deckOfCards/king_of_spades.png", "assets/images/deckOfCards/ace_of_clubs.png", "assets/images/deckOfCards/ace_of_diamonds.png",
    "assets/images/deckOfCards/ace_of_hearts.png", "assets/images/deckOfCards/ace_of_spades.png"];

const startingButtonEl = document.createElement("button");
const startingDivEl = document.getElementById("startMatchContainer");
startingButtonEl.textContent = "Wanna play a game partner?";
startingButtonEl.id = "startMatchButton";

let dealerHand = document.createElement("img");
let dealerHand2 = document.createElement("img");
let dealerHand3 = document.createElement("img");
dealerHand.classList.add("dealerHand");
dealerHand2.classList.add("dealerHand");
dealerHand3.classList.add("dealerHand");

let playerCard1 = document.createElement("img");
let playerCard2 = document.createElement("img");
playerCard1.classList.add("playerHand");
playerCard2.classList.add("playerHand");

const hitMeEl = document.createElement("button");
hitMeEl.textContent = "Hit me partner!";
const foldCardsEl = document.createElement("button");
foldCardsEl.textContent = "I'm backin' out partner.";

function getStartingHand(deckImagesArr, num) {
    const shuffled = [...deckImagesArr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
};

console.log(getStartingHand(deckImagesArr, 2));

let dealWithTheDevil = function () {
    startingDivEl.appendChild(startingButtonEl);
};

let flipAnotherCard = function () {
    /* dealerHand.insertAdjacentText("beforeend", "," + getStartingHand(deckArr, 1)) */
    startingDivEl.append(dealerHand);
    dealerHand.setAttribute("src", (getStartingHand(deckImagesArr, 1)));

}

let lostMoneyCowPoke = function () {
    document.querySelectorAll('.dealerHand').forEach(function (a) {
        a.remove()
    })

    startingDivEl.removeChild(playerCard1);
    startingDivEl.removeChild(playerCard2);

    startingDivEl.removeChild(hitMeEl);
    startingDivEl.removeChild(foldCardsEl);

    dealWithTheDevil();
}

dealWithTheDevil();

let aDangerousGame = function () {
    startingDivEl.removeChild(startingButtonEl);

    /* dealerHand.innerHTML = (getStartingHand(deckArr, 3)); */
    /*  for (let i = 0; i < (getStartingHand(deckImagesArr, 3)).length; i++) {
         startingDivEl.appendChild(dealerHand)[i];
         dealerHand.setAttribute("src", (getStartingHand(deckImagesArr)[i]));
     } */

    startingDivEl.appendChild(dealerHand);
    startingDivEl.appendChild(dealerHand2);
    startingDivEl.appendChild(dealerHand3);

    dealerHand.setAttribute("src", (getStartingHand(deckImagesArr, 1)));
    dealerHand2.setAttribute("src", (getStartingHand(deckImagesArr, 1)));
    dealerHand3.setAttribute("src", (getStartingHand(deckImagesArr, 1)));

    startingDivEl.appendChild(playerCard1);
    startingDivEl.appendChild(playerCard2);
    playerCard1.setAttribute("src", (getStartingHand(deckImagesArr, 1)));
    playerCard2.setAttribute("src", (getStartingHand(deckImagesArr, 1)));


    startingDivEl.appendChild(hitMeEl);
    startingDivEl.appendChild(foldCardsEl);

    hitMeEl.addEventListener("click", flipAnotherCard);
    foldCardsEl.addEventListener("click", lostMoneyCowPoke);

    if (dealerHand == 5) {
        /* check dealer hand and player hand to find a score */
    }
};

startingButtonEl.addEventListener("click", aDangerousGame);






/* create a new array of images sources
use a for loop to assign image sources to appended card images?
have the dealer and player hands draw from the array of image sources 
create img elements and assign them the corresponding sources
have the button for more cards create new images and assign new sources*/


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