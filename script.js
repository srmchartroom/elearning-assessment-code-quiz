// access the span with id of #quizTitle
var quizTitle = document.querySelector("#quizTitle");
// dynamically add quiz title
quizTitle.textContent = "Javascript Basics - Level I.";


// --- REMAINING DIVS NEEDED AND HIDDEN CLASS APPLICATION
// create div to handle the score rankings (possible modal?) => set var to qz12
// apply hidden attribute to qz1, qz2, qz3, qz4, qz5, qz6, qz7, qz8, qz9, qz10, qz11, qz12

// --- HIGH SCORES BUTTON LINK
// Link High Scores button to high scores listings model (qz12)
    // page should include an array of all submitted scores
    // array should be orders from max to min (e.g. highest to lowest)

// --- START QUIZ EVENTS --
// on click event event of start quiz button, should also:
    // set a time interval that runs upon click event of the start quiz button
        // timer should loop at 1000 miliseconds
        // at each loop, the time interval should decrement the textvalue of the timer span
        // on wrong answer, current time -= by 10,000 miliseconds
    // apply hidden attribute to qz0
    // remove hidden attribute to qz1

// --- QUIZ ANSWER HANDLING AND QUIZ PROGRESSION
// create an array to hold quiz responses
// listen for click even on next button of qz1
    // 
