let deckArr = ["1 Spades", "2 Spades", "3 Spades", "4 Spades", "5 Spades", "6 Spades", "7 Spades", "8 Spades", "9 Spades", "10 Spades"
,"1 Hearts", "2 Hearts", "3 Hearts", "4 Hearts", "5 Hearts", "6 Hearts", "7 Hearts", "8 Hearts", "9 Hearts", "10 Hearts"
,"1 Clubs", "2 Clubs", "3 Clubs", "4 Clubs", "5 Clubs", "6 Clubs", "7 Clubs", "8 Clubs", "9 Clubs", "10 Clubs"
,"1 Diamonds", "2 Diamonds", "3 Diamonds", "4 Diamonds", "5 Diamonds", "6 Diamonds", "7 Diamonds", "8 Diamonds", "9 Diamonds", "10 Diamonds",
"J Diamonds", "Q Diamonds", "K Diamonds", "A Diamonds","J Clubs", "Q Clubs", "K Clubs", "A Clubs","J Hearts", "Q Hearts", "K Hearts", "A Hearts","J Spades", "Q Spades", "K Spades", "A Spades"];


function getStartingHand(deckArr, num) {
    const shuffled = [...deckArr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
};

console.log(getStartingHand(deckArr, 2));

function dealWithTheDevil {
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
};