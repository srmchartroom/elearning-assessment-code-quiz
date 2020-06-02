//! HEADER ELEMENTS

//! -- QUIZ TITLE -- //
// access the span with id of #quizTitle
const quizTitle = document.querySelector("#quizTitle");
// dynamically add quiz title
quizTitle.textContent = "Javascript Basics - Level I.";
//! -- HIGH SCORES LINK -- //
// Get High Scores Link set to goToScoresBtn
const goToScoresBtn = document.querySelector("#goToScores");
//! -- TIME REMAINING TICKER -- //
// Get time remaining span and set to spanTimeRem
const spanTime = document.querySelector("#timer");

//! QUIZ ELEMENTS

//! -- QZ0 ELEMENTS -- //
// create an empty array to hold the scoring per question
let arrScore = [];
// get qz0 div and set it to qz0Div
const qz0Div = document.querySelector("#qz0");
// get Start Quiz Button and set it to startBtn 
const startBtn = document.querySelector("#startBtn");

//! -- QZ1 ELEMENTS -- //
// get qz1 div and set it to qz1Div
const qz1Div = document.querySelector("#qz1");
// get value for question 1A and set to q1A
const q1A = document.querySelector("#question1A").value;
// get label for question 1A and set to q1Alabel
const q1Alabel = document.querySelector("#question1A").label;
console.log(q1A+","+ q1Alabel);
// get value for question 1B and set to q1B
const q1B = document.querySelector("#question1B").value;
// get label for question 1B and set to q1Blabel
const q1Blabel = document.querySelector("#question1B").label;
// get value for question 1C and set to q1C
const q1C = document.querySelector("#question1C").value;
// get label for question 1C and set to q1Clabel
const q1Clabel = document.querySelector("#question1C").label;
// get value for question 1D and set to q1D
const q1D = document.querySelector("#question1D").value;
// get label for question 1D and set to q1Dlabel
const q1Dlabel = document.querySelector("#question1D").label;
// get "Next" button for QZ1 and set to nxt1Btn
const nxt1Btn = document.querySelector("#nxt1Btn");
// get correct message alert and set to q1CorrectMsg
const q1CorrectMsg = document.querySelector("#q1CorrectMsg");
// get incorrect message alert and set to q1IncorrectMsg
const q1IncorrectMsg = document.querySelector("#q1IncorrectMsg");

//! -- QZ2 ELEMENTS -- //
// get qz2 div and set it to qz2Div
const qz2Div = document.querySelector("#qz2");
// get value for question 2A and set to q2A
const q2A = document.querySelector("#question2A").value;
// get label for question 2A and set to q2Alabel
const q2Alabel = document.querySelector("#question2A").label;
// get value for question 2B and set to q2B
const q2B = document.querySelector("#question2B").value;
// get label for question 2B and set to q2Blabel
const q2Blabel = document.querySelector("#question2B").label;
// get value for question 2C and set to q2C
const q2C = document.querySelector("#question2C").value;
// get label for question 2C and set to q2Clabel
const q2Clabel = document.querySelector("#question2C").label;
// get value for question 2D and set to q2D
const q2D = document.querySelector("#question2D").value;
// get label for question 2D and set to q2Dlabel
const q2Dlabel = document.querySelector("#question2D").label;
// get "Next" button for QZ2 and set to nxt2Btn
const nxt2Btn = document.querySelector("#nxt2Btn");
// get correct message alert and set to q2CorrectMsg
const q2CorrectMsg = document.querySelector("#q2CorrectMsg");
// get incorrect message alert and set to q2IncorrectMsg
const q2IncorrectMsg = document.querySelector("#q2IncorrectMsg");

//! -- QZ3 ELEMENTS -- //
// get qz3 div and set it to qz3Div
const qz3Div = document.querySelector("#qz3");
// get value for question 3A and set to q3A
const q3A = document.querySelector("#question3A").value;
// get label for question 3A and set to q3Alabel
const q3Alabel = document.querySelector("#question3A").label;
// get value for question 3B and set to q3B
const q3B = document.querySelector("#question3B").value;
// get label for question 3B and set to q3Blabel
const q3Blabel = document.querySelector("#question3B").label;
// get value for question 3C and set to q3C
const q3C = document.querySelector("#question3C").value;
// get label for question 3C and set to q3Clabel
const q3Clabel = document.querySelector("#question3C").label;
// get value for question 3D and set to q3D
const q3D = document.querySelector("#question3D").value;
// get label for question 3D and set to q3Dlabel
const q3Dlabel = document.querySelector("#question3D").label;
// get "Next" button for QZ3 and set to nxt3Btn
const nxt3Btn = document.querySelector("#nxt3Btn");
// get correct message alert and set to q3CorrectMsg
const q3CorrectMsg = document.querySelector("#q3CorrectMsg");
// get incorrect message alert and set to q3IncorrectMsg
const q3IncorrectMsg = document.querySelector("#q3IncorrectMsg");

//! -- QZ4 ELEMENTS -- //
// get qz4 div and set it to qz4Div
const qz4Div = document.querySelector("#qz4");
// get value for question 4A and set to q4A
const q4A = document.querySelector("#question4A").value;
// get label for question 4A and set to q4Alabel
const q4Alabel = document.querySelector("#question4A").label;
// get value for question 4B and set to q4B
const q4B = document.querySelector("#question4B").value;
// get label for question 4B and set to q4Blabel
const q4Blabel = document.querySelector("#question4B").label;
// get value for question 4C and set to q4C
const q4C = document.querySelector("#question4C").value;
// get label for question 4C and set to q4Clabel
const q4Clabel = document.querySelector("#question4C").label;
// get value for question 4D and set to q4D
const q4D = document.querySelector("#question4D").value;
// get label for question 4D and set to q4Dlabel
const q4Dlabel = document.querySelector("#question4D").label;
// get "Next" button for QZ4 and set to nxt4Btn
const nxt4Btn = document.querySelector("#nxt4Btn");
// get correct message alert and set to q4CorrectMsg
const q4CorrectMsg = document.querySelector("#q4CorrectMsg");
// get incorrect message alert and set to q4IncorrectMsg
const q4IncorrectMsg = document.querySelector("#q4IncorrectMsg");


//! -- QZ5 ELEMENTS -- //
// get qz5 div and set it to qz5Div
const qz5Div = document.querySelector("#qz5");
// get value for question 5A and set to q5A
const q5A = document.querySelector("#question5A").value;
// get label for question 5A and set to q5Alabel
const q5Alabel = document.querySelector("#question5A").label;
// get value for question 5B and set to q5B
const q5B = document.querySelector("#question5B").value;
// get label for question 5B and set to q5Blabel
const q5Blabel = document.querySelector("#question5B").label;
// get value for question 5C and set to q5C
const q5C = document.querySelector("#question5C").value;
// get label for question 5C and set to q5Clabel
const q5Clabel = document.querySelector("#question5C").label;
// get value for question 5D and set to q5D
const q5D = document.querySelector("#question5D").value;
// get label for question 5D and set to q5Dlabel
const q5Dlabel = document.querySelector("#question5D").label;
// get "Next" button for QZ5 and set to nxt5Btn
const nxt5Btn = document.querySelector("#nxt5Btn");
// get correct message alert and set to q5CorrectMsg
const q5CorrectMsg = document.querySelector("#q5CorrectMsg");
// get incorrect message alert and set to q5IncorrectMsg
const q5IncorrectMsg = document.querySelector("#q5IncorrectMsg");

//! -- QZ6 ELEMENTS -- //
// get qz6 div and set it to qz6Div
const qz6Div = document.querySelector("#qz6");
// get value for question 6A and set to q6A
const q6A = document.querySelector("#question6A").value;
// get label for question 6A and set to q6Alabel
const q6Alabel = document.querySelector("#question6A").label;
// get value for question 6B and set to q6B
const q6B = document.querySelector("#question6B").value;
// get label for question 6B and set to q6Blabel
const q6Blabel = document.querySelector("#question6B").label;
// get value for question 6C and set to q6C
const q6C = document.querySelector("#question6C").value;
// get label for question 6C and set to q6Clabel
const q6Clabel = document.querySelector("#question6C").label;
// get value for question 6D and set to q6D
const q6D = document.querySelector("#question6D").value;
// get label for question 6D and set to q6Dlabel
const q6Dlabel = document.querySelector("#question6D").label;
// get "Next" button for QZ6 and set to nxt6Btn
const nxt6Btn = document.querySelector("#nxt6Btn");
// get correct message alert and set to q6CorrectMsg
const q6CorrectMsg = document.querySelector("#q6CorrectMsg");
// get incorrect message alert and set to q6IncorrectMsg
const q6IncorrectMsg = document.querySelector("#q6IncorrectMsg");

//! -- QZ7 ELEMENTS -- //
// get qz7 div and set it to qz7Div
const qz7Div = document.querySelector("#qz7");
// get value for question 7A and set to q7A
const q7A = document.querySelector("#question7A").value;
// get label for question 7A and set to q7Alabel
const q7Alabel = document.querySelector("#question7A").label;
// get value for question 7B and set to q7B
const q7B = document.querySelector("#question7B").value;
// get label for question 7B and set to q7Blabel
const q7Blabel = document.querySelector("#question7B").label;
// get value for question 7C and set to q7C
const q7C = document.querySelector("#question7C").value;
// get label for question 7C and set to q7Clabel
const q7Clabel = document.querySelector("#question7C").label;
// get value for question 7D and set to q7D
const q7D = document.querySelector("#question7D").value;
// get label for question 7D and set to q7Dlabel
const q7Dlabel = document.querySelector("#question7D").label;
// get "Next" button for QZ7 and set to nxt7Btn
const nxt7Btn = document.querySelector("#nxt7Btn");
// get correct message alert and set to q7CorrectMsg
const q7CorrectMsg = document.querySelector("#q7CorrectMsg");
// get incorrect message alert and set to q7IncorrectMsg
const q7IncorrectMsg = document.querySelector("#q7IncorrectMsg");

//! -- QZ8 ELEMENTS -- //
// get qz8 div and set it to qz8Div
const qz8Div = document.querySelector("#qz8");
// get value for question 8A and set to q8A
const q8A = document.querySelector("#question8A").value;
// get label for question 8A and set to q8Alabel
const q8Alabel = document.querySelector("#question8A").label;
// get value for question 8B and set to q8B
const q8B = document.querySelector("#question8B").value;
// get label for question 8B and set to q8Blabel
const q8Blabel = document.querySelector("#question8B").label;
// get value for question 8C and set to q8C
const q8C = document.querySelector("#question8C").value;
// get label for question 8C and set to q8Clabel
const q8Clabel = document.querySelector("#question8C").label;
// get value for question 8D and set to q8D
const q8D = document.querySelector("#question8D").value;
// get label for question 8D and set to q8Dlabel
const q8Dlabel = document.querySelector("#question8D").label;
// get "Next" button for QZ8 and set to nxt8Btn
const nxt8Btn = document.querySelector("#nxt8Btn");
// get correct message alert and set to q8CorrectMsg
const q8CorrectMsg = document.querySelector("#q8CorrectMsg");
// get incorrect message alert and set to q8IncorrectMsg
const q8IncorrectMsg = document.querySelector("#q8IncorrectMsg");

//! -- QZ9 ELEMENTS -- //
// get qz9 div and set it to qz9Div
const qz9Div = document.querySelector("#qz9");
// get value for question 9A and set to q9A
const q9A = document.querySelector("#question9A").value;
// get label for question 9A and set to q9Alabel
const q9Alabel = document.querySelector("#question9A").label;
// get value for question 9B and set to q9B
const q9B = document.querySelector("#question9B").value;
// get label for question 9B and set to q9Blabel
const q9Blabel = document.querySelector("#question9B").label;
// get value for question 9C and set to q9C
const q9C = document.querySelector("#question9C").value;
// get label for question 9C and set to q9Clabel
const q9Clabel = document.querySelector("#question9C").label;
// get value for question 9D and set to q9D
const q9D = document.querySelector("#question9D").value;
// get label for question 9D and set to q9Dlabel
const q9Dlabel = document.querySelector("#question9D").label;
// get "Next" button for QZ9 and set to nxt9Btn
const nxt9Btn = document.querySelector("#nxt9Btn");
// get correct message alert and set to q9CorrectMsg
const q9CorrectMsg = document.querySelector("#q9CorrectMsg");
// get incorrect message alert and set to q9IncorrectMsg
const q9IncorrectMsg = document.querySelector("#q9IncorrectMsg");

//! -- QZ10 ELEMENTS -- //
// get qz10 div and set it to qz10Div
const qz10Div = document.querySelector("#qz10");
// get value for question 10A and set to q10A
const q10A = document.querySelector("#question10A").value;
// get label for question 10A and set to q10Alabel
const q10Alabel = document.querySelector("#question10A").label;
// get value for question 10B and set to q10B
const q10B = document.querySelector("#question10B").value;
// get label for question 10B and set to q10Blabel
const q10Blabel = document.querySelector("#question10B").label;
// get value for question 10C and set to q10C
const q10C = document.querySelector("#question10C").value;
// get label for question 10C and set to q10Clabel
const q10Clabel = document.querySelector("#question10C").label;
// get value for question 10D and set to q10D
const q10D = document.querySelector("#question10D").value;
// get label for question 10D and set to q10Dlabel
const q10Dlabel = document.querySelector("#question10D").label;
// get "Next" button for QZ10 and set to nxt10Btn
const nxt10Btn = document.querySelector("#nxt10Btn");
// get correct message alert and set to q10CorrectMsg
const q10CorrectMsg = document.querySelector("#q10CorrectMsg");
// get incorrect message alert and set to q10IncorrectMsg
const q10IncorrectMsg = document.querySelector("#q10IncorrectMsg");

//! -- QZ11 (Scoring Conclusion) ELEMENTS -- //
// get qz11 div and set it to qz11Div
const qz11Div = document.querySelector("#qz11");
// get scoreTallyTitle h2 and set it to scoreTitle
const scoreTitle = document.querySelector("#scoreTallyTitle");
// get qz11 number correct span and set to spanNumCorrect
const spanNumCorrect = document.querySelector("#numCorrect");
// get qz11 final weighted score span and set to spanFinalScore
const spanFinalScore = document.querySelector("#score");
// get qz11 retake button and set to qz11retakeBtn
const qz11retakeBtn = document.querySelector("#retakeBtn");
// get initials input field and set to initialsInput
const initialsInput = document.querySelector("#initialsInput");
// get submit score button and set to scoreItBtn
const scoreItBtn = document.querySelector("#scoreBtn");

//! -- QZ12 (Scoreboard) ELEMENTS -- //
// get qz12 (aka "scores" and set it to scoresDiv
const scoresDiv = document.querySelector("#scores");
// get the Scores Table and set it to scoresTable
const scoresTable = document.querySelector("#scoresTable");
// get the Scores Table Body and set it to scoresTableBody
const scoresTableBody = document.querySelector("#scoresTableBody");
// get the qz12/scores retake btn and set it to scoresRetakeBtn
const scoresRetakeBtn = document.querySelector("#retake2Btn");
// get the clear scores button and set it to clearScoresBtn
const clearScoresBtn = document.querySelector("#clearScoresBtn");


//! Event Listeners //
// Adds an event listener to check run the startingPoint function on window load.
window.addEventListener("load", startingPoint);
// Add event listener to goToScoresBtn button to run highScores() onClick
goToScoresBtn.addEventListener("click", highScores);
// Add event listener to startBtn button to run startQuiz() onClick 
startBtn.addEventListener("click", startQuiz);
// Add event listener to nxt1Btn button to run nextQz1Qz2() onClick
nxt1Btn.addEventListener("click", nextQz1Qz2);
// Add event listener to nxt2Btn button to run nextQz2Qz3() onClick
nxt2Btn.addEventListener("click", nextQz2Qz3);
// Add event listener to nxt3Btn button to run nextQz3Qz4() onClick
nxt3Btn.addEventListener("click", nextQz3Qz4);
// Add event listener to nxt4Btn button to run nextQz4Qz5() onClick
nxt4Btn.addEventListener("click", nextQz4Qz5);
// Add event listener to nxt5Btn button to run nextQz5Qz6() onClick
nxt5Btn.addEventListener("click", nextQz5Qz6);
// Add event listener to nxt6Btn button to run nextQz6Qz7() onClick
nxt6Btn.addEventListener("click", nextQz6Qz7);
// Add event listener to nxt7Btn button to run nextQz7Qz8() onClick
nxt7Btn.addEventListener("click", nextQz7Qz8);
// Add event listener to nxt8Btn button to run nextQz8Qz9() onClick
nxt8Btn.addEventListener("click", nextQz8Qz9);
// Add event listener to nxt9Btn button to run nextQz9Qz10() onClick
nxt9Btn.addEventListener("click", nextQz9Qz10);
// Add event listener to nxt10Btn button to run scoreTally() onClick
nxt10Btn.addEventListener("click", scoreTally);
// Add event listener to qz11retakeBtn button to run startingPoint() onClick
qz11retakeBtn.addEventListener("click", startingPoint);
// Add event listener to scoreItBtn button to run scoreBoard() onClick
scoreItBtn.addEventListener("click",scoreBoard);
// Add event listener to scoresRetakeBtn button to run startingPoint() onClick
scoresRetakeBtn.addEventListener("click", startingPoint);
// Add event listener to clearScoresBtn button to run clearScores() onClick
clearScoresBtn.addEventListener("click", clearScores);

//! -- OTHER GLOBAL VARIABLES -- //



//! -- FUNCTIONS -- //
//------------------------------------------------------------------------------------------------------------------//
// startingPoint() sets a class baseline that shows the beginning of quiz div and hides all others, and sets the timer to 0.
function startingPoint() {
    // if the quiz starting point (qz0Div) is hidden, display it. Else, do nothing.
    if (qz0Div.classList.contains("hidden")) { qz0Div.classList.remove("hidden"); } else { }
    // if the 1st question (qz1Div) is hidden, do nothing. Else, hide it.
    if (qz1Div.classList.contains("hidden")) { } else { qz1Div.classList.add("hidden"); }
    // if the 2nd question (qz2Div) is hidden, do nothing. Else, hide it.
    if (qz2Div.classList.contains("hidden")) { } else { qz2Div.classList.add("hidden"); }
    // if the 3rd question (qz3Div) is hidden, do nothing. Else, hide it.
    if (qz3Div.classList.contains("hidden")) { } else { qz3Div.classList.add("hidden"); }
    // if the 4th question (qz4Div) is hidden, do nothing. Else, hide it.
    if (qz4Div.classList.contains("hidden")) { } else { qz4Div.classList.add("hidden"); }
    // if the 5th question (qz5Div) is hidden, do nothing. Else, hide it.
    if (qz5Div.classList.contains("hidden")) { } else { qz5Div.classList.add("hidden"); }
    // if the 6th question (qz6Div) is hidden, do nothing. Else, hide it.
    if (qz6Div.classList.contains("hidden")) { } else { qz6Div.classList.add("hidden"); }
    // if the 7th question (qz7Div) is hidden, do nothing. Else, hide it.
    if (qz7Div.classList.contains("hidden")) { } else { qz7Div.classList.add("hidden"); }
    // if the 8th question (qz8Div) is hidden, do nothing. Else, hide it.
    if (qz8Div.classList.contains("hidden")) { } else { qz8Div.classList.add("hidden"); }
    // if the 9th question (qz9Div) is hidden, do nothing. Else, hide it.
    if (qz9Div.classList.contains("hidden")) { } else { qz9Div.classList.add("hidden"); }
    // if the 10th question (qz10Div) is hidden, do nothing. Else, hide it.
    if (qz10Div.classList.contains("hidden")) { } else { qz10Div.classList.add("hidden"); }
    // if the score tally (qz11Div) is hidden, do nithing. Else, hide it.
    if (qz11Div.classList.contains("hidden")) { } else { qz11Div.classList.add("hidden"); }
    // if the scoreboard (scoresDiv) is hidden, do nothing.  Else, hide it.
    if (scoresDiv.classList.contains("hidden")) { } else { scoresDiv.classList.add("hidden"); }
    // set the time to 0
    var secondsLeft = 0;
    // ...and display the 0-set timer in the time remaining div.
    spanTime.textContent = Math.floor(secondsLeft);
}
//------------------------------------------------------------------------------------------------------------------//
// highScores() checks if quiz is in process or submission isn't complete, & throws an alert. Else, show score board.
function highScores() {
    // if the quiz has started and any question is currently displayed...
    if(!(qz1Div.classList.contains("hidden")) || !(qz2Div.classList.contains("hidden")) || !(qz3Div.classList.contains("hidden")) || !(qz4Div.classList.contains("hidden")) || !(qz5Div.classList.contains("hidden")) || !(qz6Div.classList.contains("hidden")) || !(qz7Div.classList.contains("hidden")) || !(qz8Div.classList.contains("hidden")) || !(qz9Div.classList.contains("hidden")) || !(qz10Div.classList.contains("hidden"))) {
    // show the user an alert that they must complete the quiz before viewing High Scores
        alert("You are in the middle of a timed quiz. Please complete the quiz before view High Scores.");    
    // else if the score tally div is displayed (and the score hasn't been submitted)
    } else if (!(qz11Div.classList.contains("hidden"))) {
    // show the user an alert that they must submit their score before viewing High Scores
        alert("Please submit your score before viewing High Scores.");
    // else if the quiz start or the score board is displayed...
    } else {
        // ...hide the quiz start div...
        qz0Div.classList.add("hidden");
        // ...and show the scoreboard div.
        scoresDiv.classList.remove("hidden");
    }
}
//------------------------------------------------------------------------------------------------------------------//
// scoreTimer() does the following:
// starts a timer that counts down from a set number of seconds
// if an answer is wrong, the time decrements by 10 seconds and then continues counting down.
// once the timer reaches zero an alert/confirm is thrown indicating to the user that time is up
// then the user is "directed" to the score Tally page/div (visibility is toggled to hide current slide and display score tally div)
function scoreTimer() {
    // set secondsLeft var to 60
    var secondsLeft = 60;
    // display the initial time state on-screen as 60
    spanTime.textContent = Math.floor(secondsLeft);
    console.log("--------------------");
    console.log("scoreTime() has kicked off");
    // create a setInterval loop to a var called timerInterval
    var timerInterval = setInterval(function() {
        // on each cycle of the loop, decrement the secondsLeft var by 1
        secondsLeft--;
        // display the time state on screen to the current decremented seconds
        spanTime.textContent = Math.floor(secondsLeft);
        // the screen is NOT a question
        if (!qz0Div.classList.contains("hidden") || !qz11Div.classList.contains("hidden") || !scoresDiv.classList.contains("hidden")) { 
            console.log("Time should stop");
            clearInterval(timerInterval);
        } else if(secondsLeft === 0) { // if the seconds run out...
            // clear the Interval
          clearInterval(timerInterval);
          // alert the user that they've run out of time
          alert("Time's up!");
          // reset the time and div visibilities to the starting point...
          startingPoint();
          // ...then hide the quiz start state...
          qz0Div.classList.add("hidden");
          // ...and show the tally page...
          qz11Div.classList.remove("hidden");
          // ...and finally change the score tally title to indicate time ran out, instead quiz completed
          scoreTitle.textContent = "You have run out of time.";       
        }    
    }, 1000);
}
//------------------------------------------------------------------------------------------------------------------//
// startQuiz() does the following:
// --- 1. Toggles visibility of the quiz start (qz0Div) and the hidden question #1 div (qz1Div), simulating a navigation effect
// --- 2. kicks of timer event
function startQuiz() {
    // sets the score array to empty if not already done so
    arrScore = []
    // hide the quiz start div
    qz0Div.classList.add("hidden");
    // show the 1st question
    qz1Div.classList.remove("hidden");
    // kick off the timer
    scoreTimer();
}


function getQ1Answers() {
    // get Q1's Answers and Validate
    console.log("placeholder");
}
function getQ2Answers() {
    // get Q2's Answers and Validate
    console.log("placeholder");
}
function getQ3Answers() {
    // get Q3's Answers and Validate
    console.log("placeholder");
}
function getQ4Answers() {
    // get Q4's Answers and Validate
    console.log("placeholder");
}
function getQ5Answers() {
    // get Q5's Answers and Validate
    console.log("placeholder");
}
function getQ6Answers() {
    // get Q6's Answers and Validate
    console.log("placeholder");
}
function getQ7Answers() {
    // get Q7's Answers and Validate
    console.log("placeholder");
}
function getQ8Answers() {
    // get Q8's Answers and Validate
    console.log("placeholder");
}
function getQ9Answers() {
    // get Q9's Answers and Validate
    console.log("placeholder");
}
function getQ10Answers() {
    // get Q10's Answers and Validate
    console.log("placeholder");
}
function scoreQuizAnswers() {
    // score quiz answers array
    console.log("placeholder");
}

//------------------------------------------------------------------------------------------------------------------//
// nextQz1Qz2() does the following:
// --- 1. Toggles visibility of question #1 (qz1Div) and the hidden question #2 (qz2Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#2)
function nextQz1Qz2() {
    qz1Div.classList.add("hidden");
    qz2Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz2Qz3() does the following:
// --- 1. Toggles visibility of question #2 (qz2Div) and the hidden question #3 (qz3Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#3)
function nextQz2Qz3() {
    qz2Div.classList.add("hidden");
    qz3Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz3Qz4() does the following:
// --- 1. Toggles visibility of question #3 (qz3Div) and the hidden question #4 (qz4Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#4)
function nextQz3Qz4() {
    qz3Div.classList.add("hidden");
    qz4Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz4Qz5() does the following:
// --- 1. Toggles visibility of question #4 (qz4Div) and the hidden question #5 (qz5Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#5)
function nextQz4Qz5() {
    qz4Div.classList.add("hidden");
    qz5Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz5Qz6() does the following:
// --- 1. Toggles visibility of question #5 (qz5Div) and the hidden question #6 (qz6Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#6)
function nextQz5Qz6() {
    qz5Div.classList.add("hidden");
    qz6Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz6Qz7() does the following:
// --- 1. Toggles visibility of question #6 (qz6Div) and the hidden question #7 (qz7Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#7)
function nextQz6Qz7() {
    qz6Div.classList.add("hidden");
    qz7Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz7Qz8() does the following:
// --- 1. Toggles visibility of question #7 (qz7Div) and the hidden question #8 (qz8Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#8)
function nextQz7Qz8() {
    qz7Div.classList.add("hidden");
    qz8Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz8Qz9() does the following:
// --- 1. Toggles visibility of question #8 (qz8Div) and the hidden question #9 (qz9Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#9)
function nextQz8Qz9() {
    qz8Div.classList.add("hidden");
    qz9Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// nextQz9Qz10() does the following:
// --- 1. Toggles visibility of question #9 (qz9Div) and the hidden question #2 (qz10Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#10)
function nextQz9Qz10() {
    qz9Div.classList.add("hidden");
    qz10Div.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// scoreTally() does the following:
// --- 1. Toggles visibility of question #10 (qz10Div) and the hidden score tally div (qz11Div), simulating navigation effect
// --- 2. Calculates the score based on answers correct (from the scores array) and the time
// --- 3. enters the score, time, and answers correct in the appropriate span placeholders for the those values
function scoreTally() {
    qz10Div.classList.add("hidden");
    qz11Div.classList.remove("hidden");
    scoreTitle.textContent = "You have completed this quiz.";
}
//------------------------------------------------------------------------------------------------------------------//
// scoreBoard() does the following:
// --- 1. Toggles visibility of the score tally div (qz11Div) and the hidden scoreboard div (scoresDiv), simulating navigation effect
// --- 2. writes to the scoreboard table the initials input, the time, the calculated score, questions correct
// --- 3. Disables submit score btn until initials are provided
function scoreBoard() {
    qz11Div.classList.add("hidden");
    scoresDiv.classList.remove("hidden");
}
//------------------------------------------------------------------------------------------------------------------//
// clearScores() does the following:
// --- 1. clears the score array if not already clear
// --- 2. clears the scoreboard table
function clearScores() {
    // this function will clear the scores in the ScoreBoard when the clearScoresBtn is clicked
    console.log("clearScoresBtn button was clicked")
}
//------------------------------------------------------------------------------------------------------------------//


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
