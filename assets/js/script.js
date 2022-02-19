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
playerCard1.classList.add("playerHandOne");
playerCard2.classList.add("playerHandTwo");

const hitMeEl = document.createElement("button");
hitMeEl.textContent = "Hit me partner!";
const foldCardsEl = document.createElement("button");
foldCardsEl.textContent = "I'm backin' out partner.";

function getStartingHand(deckImagesArr, num) {
    const shuffled = [...deckImagesArr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
};

let dealWithTheDevil = function () {
    startingDivEl.appendChild(startingButtonEl);
};

let flipAnotherCard = function () {
    let flippedCard = document.createElement("img");
    flippedCard.classList.add("dealerHand");
    flippedCard.setAttribute("src", (getStartingHand(deckImagesArr, 1)));
    dealerHand3.insertAdjacentElement("beforebegin", flippedCard);
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

    /* if (dealerHand == 5) {
        check dealer hand and player hand to find a score
    } */
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