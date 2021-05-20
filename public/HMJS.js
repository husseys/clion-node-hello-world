//sadly I ran out of time on this project:(


const choices = {
    "categories": [
        {
            "Sports": ["soccer", "football", "tennis", "golf", "swimming", "gym", "ball", "bat", "athlete", "biking",
                "billards", "darts", "frisbee", "hockey", "luge", "mvp", "rugby", "ski", "snowboard", "taekwondo"]
        },

        {
            "Animals": ["dog", "cat", "zebra", "elephant", "ant", "alligator", "wolf", "bee", "bird", "turtle", "bull",
                "camel", "centipede", "cockroach", "dolphin", "eagle", "fox", "frog", "hamster", "kangaroo", "octopus", "penguin", "swordfish"]
        },

        {
            "Holidays": ["diwali", "boxing", "flag", "juneteenth", "memorial", "presidents", "passover",
                "ramadan", "valentines", "earth", "kwanzaa", "christmas", "halloween", "thanksgiving", "new"]
        },
    ]
}

let word;

// Checking if the document is fully loaded or complete. Upon completion, call initApplication()
document.onreadystatechange = function() {
    if(document.readyState === 'complete')
    {
        initApplication();
    }
}

// Function to initialize the javascript file after the HTML page has loaded up
function initApplication(){
    var element = document.getElementById("h1");
    console.log(element.innerHTML);
}

//Getting reference to maxNumForms, categoryForms, and startGameButton
function buttonOnClick(){
    var maxNumForms = document.getElementById("maxNumForms");
    var categoryForms = document.getElementById("categoryForms"); // The div for the categories
    var startGameButton = document.getElementById("startGameButton");
    var outputDisplay = document.getElementById("output");
    let lengthOfWord = document.getElementById("maxnum").value;
    console.log(lengthOfWord);
    if(lengthOfWord === "")
    {
        outputDisplay.innerHTML = "Please enter a valid number!";
        return;
    }
    else
    {
        outputDisplay.style.visibility = "hidden";
    }

    var blanks = "";

    // Hiding the forms and button after user starts the game
    startGameButton.style.visibility = "hidden"
    maxNumForms.style.visibility = "hidden";
    categoryForms.style.visibility = "hidden";


    // Getting reference to hangmanForm and setting the visibility to visible
    var hangmanForm = document.getElementById("hangman");
    hangman.style.visibility = "visible";

    // Gets the desired length of the word from the max number input and the desired
    // category for the word

    let desiredCategory = document.getElementById("category"); // The actual drop down reference
    console.log(lengthOfWord);
    console.log(desiredCategory.value);

if (desiredCategory !== "Choose a Category:"){
    var categoryArray = choices["categories"][desiredCategory.value - 1][desiredCategory.options[desiredCategory.value - 1].innerText];
    var index = Math.floor(Math.random() * categoryArray.length)

    word = categoryArray[index];
    console.log(word);
    while (word.length > lengthOfWord){
        index = Math.floor(Math.random() * categoryArray.length);
        word = categoryArray[index];
        console.log(word);
    }
}

    /* end config options */

    lettersGuessed = lettersMatched = '';
    numLettersMatched = 0;
    /* set up display of letters in current word */
    letters = document.getElementById("letters");
    letters.innerHTML = '<p class="current-word"><u>Current word:</u></p>';


    var letter, i;
    for (i = 0; i < word.length; i++) {
        letter = '<li class="letter letter' + word.charAt(i).toUpperCase() + '">' + word.charAt(i).toUpperCase() + '</li>';
        letters.insertAdjacentHTML('beforeend', letter);

    }
};

//Letter Guess

function guessLetter(){
    console.log("Guess Button Pressed");
    var letter = document.getElementById("letter").value;
    for (var i = 0; i < word.length; i++) {
        if(letter === word.charAt(i))
        {
            var letterToDisplay = document.getElementsByClassName("letter letter" + letter.toUpperCase()).item(0);
            letterToDisplay.style.color = "black";
        }
    }

};


//Word Guess

function wordGuess() {
    console.log("Guess Word Pressed");
    var guessedWord = document.getElementById("word").value;
    var winner = document.getElementById("output");
    console.log(guessedWord);
    if(guessedWord === word)
    {
        for(var i = 0; i < word.length; i++) {
            var lettertoDisplay = document.getElementsByClassName("letter letter" + word.charAt(i).toUpperCase()).item(0);
            lettertoDisplay.style.color = "black";
        }
        winner.innerHTML = "You Have Won"
        winner.style.visibility = "visible"
    }
    else
    {
        winner.innerHTML = "You have lost"
        winner.style.visibility = "visible"
    }
}







