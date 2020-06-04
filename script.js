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
//! -- TIME PENALTY VARIABLE -- //
// sets an empty timePenalty var that will be assigned a penalty value when answer is incorrect
let timePenalty = "";


//! QUIZ QUESTION ARRAYS
// Question #1 Array
const arrQZ1 = {
    question : "Which of the following are not valid events for a .addEventListener method?",
    qz1A : {txtValue : "click" , correct : false },
    qz1B : {txtValue : "submit", correct : false },
    qz1C : {txtValue : "keypress", correct : false },
    qz1D : {txtValue : "wait" , correct: true }
};
// Question #2 Array
const arrQZ2 = {
    question : "Which of the following prevents event bubbling to a parent element?",
    qz2A : {txtValue : "event.preventDefault", correct : false },
    qz2B : {txtValue : "event.stopDefault", correct : false },
    qz2C : {txtValue : "event.preventPropagation", correct: false},
    qz2D : {txtValue : "event.stopPropagation", correct: true}
};
// Question #3 Array
const arrQZ3 = {
    question : "Which method is unique to arrays and can be used similar to a 'for' loop to act on each index and item in an array?",
    qz3A : {txtValue : "while", correct : false },
    qz3B : {txtValue : "if...else if...else", correct : false},
    qz3C : {txtValue : "forEach", correct : true},
    qz3D : {txtValue : "case...switch", correct: false}
};
// Question #4 Array
const arrQZ4 = {
    question : "Which of the following would you use to round '1.6739' to '1'?",
    qz4A : {txtValue : "Math.round", correct : false },
    qz4B : {txtValue : "Math.roundDown", correct : false},
    qz4C : {txtValue : "Math.ceiling", correct : false},
    qz4D : {txtValue : "Math.floor", correct: true}
};
// Question #5 Array
const arrQZ5 = {
    question : "Which of the following methods would you use to create a loop based on time elapsing?",
    qz5A : {txtValue : "getInterval", correct : false },
    qz5B : {txtValue : "setInterval", correct : true},
    qz5C : {txtValue : "getTimer", correct : false},
    qz5D : {txtValue : "setTimer", correct: false}
};
// Question #6 Array
const arrQZ6 = {
    question : "Which of the following would return the item in the first index position of an array call 'items'?",
    qz6A : {txtValue : "items.1", correct : false },
    qz6B : {txtValue : "items.0", correct : false},
    qz6C : {txtValue : "items[1]", correct : true},
    qz6D : {txtValue : "items[0]", correct: false}
};
// Question #7 Array
const arrQZ7 = {
    question : "Which of the following methods would be used on an array to arrange its items alphabetically?",
    qz7A : {txtValue : "sort", correct : true },
    qz7B : {txtValue : "arrange", correct : false},
    qz7C : {txtValue : "alpha", correct : false},
    qz7D : {txtValue : "alphaOrder", correct: false}
};
// Question #8 Array
const arrQZ8 = {
    question : "Which string method would you use to remove excess whitespace from both sides of a string?",
    qz8A : {txtValue : "slice", correct : false },
    qz8B : {txtValue : "concat", correct : false},
    qz8C : {txtValue : "trim", correct : true},
    qz8D : {txtValue : "removeSpaces", correct: false}
};
// Question #9 Array
const arrQZ9 = {
    question : "Which of the following is true?",
    qz9A : {txtValue : "10 = '10'", correct : false },
    qz9B : {txtValue : "10 == '10'", correct : true},
    qz9C : {txtValue : "'10'=== 10", correct : false},
    qz9D : {txtValue : "10 === '10'", correct: false}
};
// Question #10 Array
const arrQZ10 = {
    question : "If given a variable equal to '10', which method would you use to convert the '10' string to the number 10?",
    qz10A : {txtValue : "toNum", correct : false },
    qz10B : {txtValue : "stringify", correct : false},
    qz10C : {txtValue : "fromString", correct : false},
    qz10D : {txtValue : "parseInt", correct: true}
};

//! -- QZ0 ELEMENTS -- //
// create an empty array to hold the scoring per question
let arrScore = {};
// get qz0 div and set it to qz0Div
const qz0Div = document.querySelector("#qz0");
// get Start Quiz Button and set it to startBtn 
const startBtn = document.querySelector("#startBtn");
// set secondsLeft var to 60
let secondsLeft = 120;

//! -- QZ1 ELEMENTS -- //
const qz1Div = document.querySelector("#qz1"); // set a var to <div> with corresponding qz#Div
// --------------------------------------------------------------------------------------- //
/* NOTE: instead of setting the question and answers/labels in the HTML, we're setting them in an object per question, that way we can later dynamically change questions and answers in a variety of ways, including a potential enhancement to this application of an admin interface that allows for the question and answer selections to be input by the admin first and serve them dynamically in the quiz.  Though this means a bit more coding on the front-end, the goal is to enable flexible extension of the application downstream. */
// --------------------------------------------------------------------------------------- //
const question1 = document.querySelector("#question1"); // set var to the <p> with question's #id
const question1TXT = arrQZ1.question; // set var to question value in questions array object
question1.textContent = question1TXT; // set question's text content on page to txt var
// ---- OPTION 1A ---- //
const lblQ1A = document.querySelector("#label1A"); // set a var to the field label on the radio
lblQ1A.textContent = arrQZ1.qz1A.txtValue; // set text of label to the value in the object
const q1Avalue = document.querySelector("#question1A"); // set a var to the actual radio input
q1Avalue.value = arrQZ1.qz1A.correct; // set the value of the input to the value in the object
// ---- OPTION 1B ---- //
const lblQ1B = document.querySelector("#label1B"); // set a var to the field label on the radio
lblQ1B.textContent = arrQZ1.qz1B.txtValue; // set text of label to the value in the object
const q1Bvalue = document.querySelector("#question1B"); // set a var to the actual radio input
q1Bvalue.value = arrQZ1.qz1B.correct; // set the value of the input to the value in the object
// ---- OPTION 1C ---- //
const lblQ1C = document.querySelector("#label1C"); // set a var to the field label on the radio
lblQ1C.textContent = arrQZ1.qz1C.txtValue; // set text of label to the value in the object
const q1Cvalue = document.querySelector("#question1C"); // set a var to the actual radio input
q1Cvalue.value = arrQZ1.qz1C.correct; // set the value of the input to the value in the object
// ---- OPTION 1D ---- //
const lblQ1D = document.querySelector("#label1D"); // set a var to the field label on the radio
lblQ1D.textContent = arrQZ1.qz1D.txtValue; // set text of label to the value in the object
const q1Dvalue = document.querySelector("#question1D"); // set a var to the actual radio input
q1Dvalue.value = arrQZ1.qz1D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt1Btn = document.querySelector("#nxt1Btn"); // get "Next" button and set to var
const q1CorrectMsg = document.querySelector("#q1CorrectMsg"); // get correct message alert and set to var
const q1IncorrectMsg = document.querySelector("#q1IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q1Answers = document.forms.fq1.elements.question1; // set radio elements w/ name of question1 to q1Answers
let q1FinalAnswer = ""; // placeholder for final answer after submit

//! -- QZ2 ELEMENTS -- //
const qz2Div = document.querySelector("#qz2"); // set a var to <div> with corresponding qz#Div
const question2 = document.querySelector("#question2"); // set var to the <p> with question's #id
const question2TXT = arrQZ2.question; // set var to question value in questions array object
question2.textContent = question2TXT; // set question's text content on page to txt var--- //
// ---- OPTION 2A ---- //
const lblQ2A = document.querySelector("#label2A"); // set a var to the field label on the radio
lblQ2A.textContent = arrQZ2.qz2A.txtValue; // set text of label to the value in the object
const q2Avalue = document.querySelector("#question2A"); // set a var to the actual radio input
q2Avalue.value = arrQZ2.qz2A.correct; // set the value of the input to the value in the object
// ---- OPTION 2B ---- //
const lblQ2B = document.querySelector("#label2B"); // set a var to the field label on the radio
lblQ2B.textContent = arrQZ2.qz2B.txtValue; // set text of label to the value in the object
const q2Bvalue = document.querySelector("#question2B"); // set a var to the actual radio input
q2Bvalue.value = arrQZ2.qz2B.correct; // set the value of the input to the value in the object
// ---- OPTION 2C ---- //
const lblQ2C = document.querySelector("#label2C"); // set a var to the field label on the radio
lblQ2C.textContent = arrQZ2.qz2C.txtValue; // set text of label to the value in the object
const q2Cvalue = document.querySelector("#question2C"); // set a var to the actual radio input
q2Cvalue.value = arrQZ2.qz2C.correct; // set the value of the input to the value in the object
// ---- OPTION 2D ---- //
const lblQ2D = document.querySelector("#label2D"); // set a var to the field label on the radio
lblQ2D.textContent = arrQZ2.qz2D.txtValue; // set text of label to the value in the object
const q2Dvalue = document.querySelector("#question2D"); // set a var to the actual radio input
q2Dvalue.value = arrQZ2.qz2D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt2Btn = document.querySelector("#nxt2Btn"); // get "Next" button and set to var
const q2CorrectMsg = document.querySelector("#q2CorrectMsg"); // get correct message alert and set to var
const q2IncorrectMsg = document.querySelector("#q2IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q2Answers = document.forms.fq2.elements.question2; // set radio elements w/ name of question2 to q2Answers
let q2FinalAnswer = ""; // placeholder for final answer after submit

//! -- QZ3 ELEMENTS -- //
const qz3Div = document.querySelector("#qz3"); // set a var to <div> with corresponding qz#Div
const question3 = document.querySelector("#question3"); // set var to the <p> with question's #id
const question3TXT = arrQZ3.question; // set var to question value in questions array object
question3.textContent = question3TXT; // set question's text content on page to txt var
// ---- OPTION 3A ---- //
const lblQ3A = document.querySelector("#label3A"); // set a var to the field label on the radio
lblQ3A.textContent = arrQZ3.qz3A.txtValue; // set text of label to the value in the object
const q3Avalue = document.querySelector("#question3A"); // set a var to the actual radio input
q3Avalue.value = arrQZ3.qz3A.correct; // set the value of the input to the value in the object
// ---- OPTION 3B ---- //
const lblQ3B = document.querySelector("#label3B"); // set a var to the field label on the radio
lblQ3B.textContent = arrQZ3.qz3B.txtValue; // set text of label to the value in the object
const q3Bvalue = document.querySelector("#question3B"); // set a var to the actual radio input
q3Bvalue.value = arrQZ3.qz3B.correct; // set the value of the input to the value in the object
// ---- OPTION 3C ---- //
const lblQ3C = document.querySelector("#label3C"); // set a var to the field label on the radio
lblQ3C.textContent = arrQZ3.qz3C.txtValue; // set text of label to the value in the object
const q3Cvalue = document.querySelector("#question3C"); // set a var to the actual radio input
q3Cvalue.value = arrQZ3.qz3C.correct; // set the value of the input to the value in the object
// ---- OPTION 3D ---- //
const lblQ3D = document.querySelector("#label3D"); // set a var to the field label on the radio
lblQ3D.textContent = arrQZ3.qz3D.txtValue; // set text of label to the value in the object
const q3Dvalue = document.querySelector("#question3D"); // set a var to the actual radio input
q3Dvalue.value = arrQZ3.qz3D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt3Btn = document.querySelector("#nxt3Btn"); // get "Next" button and set to var
const q3CorrectMsg = document.querySelector("#q3CorrectMsg"); // get correct message alert and set to var
const q3IncorrectMsg = document.querySelector("#q3IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q3Answers = document.forms.fq3.elements.question3; // set radio elements w/ name of question3 to q3Answers
let q3FinalAnswer = ""; // placeholder for final answer after submit

//! -- QZ4 ELEMENTS -- //
const qz4Div = document.querySelector("#qz4"); // set a var to <div> with corresponding qz#Div
const question4 = document.querySelector("#question4"); // set var to the <p> with question's #id
const question4TXT = arrQZ4.question; // set var to question value in questions array object
question4.textContent = question4TXT; // set question's text content on page to txt var
// ---- OPTION 4A ---- //
const lblQ4A = document.querySelector("#label4A"); // set a var to the field label on the radio
lblQ4A.textContent = arrQZ4.qz4A.txtValue; // set text of label to the value in the object
const q4Avalue = document.querySelector("#question4A"); // set a var to the actual radio input
q4Avalue.value = arrQZ4.qz4A.correct; // set the value of the input to the value in the object
// ---- OPTION 4B ---- //
const lblQ4B = document.querySelector("#label4B"); // set a var to the field label on the radio
lblQ4B.textContent = arrQZ4.qz4B.txtValue; // set text of label to the value in the object
const q4Bvalue = document.querySelector("#question4B"); // set a var to the actual radio input
q4Bvalue.value = arrQZ4.qz4B.correct; // set the value of the input to the value in the object
// ---- OPTION 4C ---- //
const lblQ4C = document.querySelector("#label4C"); // set a var to the field label on the radio
lblQ4C.textContent = arrQZ4.qz4C.txtValue; // set text of label to the value in the object
const q4Cvalue = document.querySelector("#question4C"); // set a var to the actual radio input
q4Cvalue.value = arrQZ4.qz4C.correct; // set the value of the input to the value in the object
// ---- OPTION 4D ---- //
const lblQ4D = document.querySelector("#label4D"); // set a var to the field label on the radio
lblQ4D.textContent = arrQZ4.qz4D.txtValue; // set text of label to the value in the object
const q4Dvalue = document.querySelector("#question4D"); // set a var to the actual radio input
q4Dvalue.value = arrQZ4.qz4D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt4Btn = document.querySelector("#nxt4Btn"); // get "Next" button and set to var
const q4CorrectMsg = document.querySelector("#q4CorrectMsg"); // get correct message alert and set to var
const q4IncorrectMsg = document.querySelector("#q4IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q4Answers = document.forms.fq4.elements.question4; // set radio elements w/ name of question4 to q4Answers
let q4FinalAnswer = ""; // placeholder for final answer after submit

//! -- QZ5 ELEMENTS -- //
const qz5Div = document.querySelector("#qz5"); // set a var to <div> with corresponding qz#Div
const question5 = document.querySelector("#question5"); // set var to the <p> with question's #id
const question5TXT = arrQZ5.question; // set var to question value in questions array object
question5.textContent = question5TXT; // set question's text content on page to txt var
// ---- OPTION 5A ---- //
const lblQ5A = document.querySelector("#label5A"); // set a var to the field label on the radio
lblQ5A.textContent = arrQZ5.qz5A.txtValue; // set text of label to the value in the object
const q5Avalue = document.querySelector("#question5A"); // set a var to the actual radio input
q5Avalue.value = arrQZ5.qz5A.correct; // set the value of the input to the value in the object
// ---- OPTION 5B ---- //
const lblQ5B = document.querySelector("#label5B"); // set a var to the field label on the radio
lblQ5B.textContent = arrQZ5.qz5B.txtValue; // set text of label to the value in the object
const q5Bvalue = document.querySelector("#question5B"); // set a var to the actual radio input
q5Bvalue.value = arrQZ5.qz5B.correct; // set the value of the input to the value in the object
// ---- OPTION 5C ---- //
const lblQ5C = document.querySelector("#label5C"); // set a var to the field label on the radio
lblQ5C.textContent = arrQZ5.qz5C.txtValue; // set text of label to the value in the object
const q5Cvalue = document.querySelector("#question5C"); // set a var to the actual radio input
q5Cvalue.value = arrQZ5.qz5C.correct; // set the value of the input to the value in the object
// ---- OPTION 5D ---- //
const lblQ5D = document.querySelector("#label5D"); // set a var to the field label on the radio
lblQ5D.textContent = arrQZ5.qz5D.txtValue; // set text of label to the value in the object
const q5Dvalue = document.querySelector("#question5D"); // set a var to the actual radio input
q5Dvalue.value = arrQZ5.qz5D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt5Btn = document.querySelector("#nxt5Btn"); // get "Next" button and set to var
const q5CorrectMsg = document.querySelector("#q5CorrectMsg"); // get correct message alert and set to var
const q5IncorrectMsg = document.querySelector("#q5IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q5Answers = document.forms.fq5.elements.question5; // set radio elements w/ name of question5 to q5Answers
let q5FinalAnswer = ""; // placeholder for final answer after submit


//! -- QZ6 ELEMENTS -- //
const qz6Div = document.querySelector("#qz6"); // set a var to <div> with corresponding qz#Div
const question6 = document.querySelector("#question6"); // set var to the <p> with question's #id
const question6TXT = arrQZ6.question; // set var to question value in questions array object
question6.textContent = question6TXT; // set question's text content on page to txt var
// ---- OPTION 6A ---- //
const lblQ6A = document.querySelector("#label6A"); // set a var to the field label on the radio
lblQ6A.textContent = arrQZ6.qz6A.txtValue; // set text of label to the value in the object
const q6Avalue = document.querySelector("#question6A"); // set a var to the actual radio input
q6Avalue.value = arrQZ6.qz6A.correct; // set the value of the input to the value in the object
// ---- OPTION 6B ---- //
const lblQ6B = document.querySelector("#label6B"); // set a var to the field label on the radio
lblQ6B.textContent = arrQZ6.qz6B.txtValue; // set text of label to the value in the object
const q6Bvalue = document.querySelector("#question6B"); // set a var to the actual radio input
q6Bvalue.value = arrQZ6.qz6B.correct; // set the value of the input to the value in the object
// ---- OPTION 6C ---- //
const lblQ6C = document.querySelector("#label6C"); // set a var to the field label on the radio
lblQ6C.textContent = arrQZ6.qz6C.txtValue; // set text of label to the value in the object
const q6Cvalue = document.querySelector("#question6C"); // set a var to the actual radio input
q6Cvalue.value = arrQZ6.qz6C.correct; // set the value of the input to the value in the object
// ---- OPTION 6D ---- //
const lblQ6D = document.querySelector("#label6D"); // set a var to the field label on the radio
lblQ6D.textContent = arrQZ6.qz6D.txtValue; // set text of label to the value in the object
const q6Dvalue = document.querySelector("#question6D"); // set a var to the actual radio input
q6Dvalue.value = arrQZ6.qz6D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt6Btn = document.querySelector("#nxt6Btn"); // get "Next" button and set to var
const q6CorrectMsg = document.querySelector("#q6CorrectMsg"); // get correct message alert and set to var
const q6IncorrectMsg = document.querySelector("#q6IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q6Answers = document.forms.fq6.elements.question6; // set radio elements w/ name of question6 to q6Answers
let q6FinalAnswer = ""; // placeholder for final answer after submit


//! -- QZ7 ELEMENTS -- //
const qz7Div = document.querySelector("#qz7"); // set a var to <div> with corresponding qz#Div\
const question7 = document.querySelector("#question7"); // set var to the <p> with question's #id
const question7TXT = arrQZ7.question; // set var to question value in questions array object
question7.textContent = question7TXT; // set question's text content on page to txt var
// ---- OPTION 7A: Label ---- //
const lblQ7A = document.querySelector("#label7A"); // set a var to the field label on the radio
lblQ7A.textContent = arrQZ7.qz7A.txtValue; // set text of label to the value in the object
const q7Avalue = document.querySelector("#question7A");  // set a var to the actual radio input
q7Avalue.value = arrQZ7.qz7A.correct; // set the value of the input to the value in the object
// ---- OPTION 7B ---- //
const lblQ7B = document.querySelector("#label7B"); // set a var to the field label on the radio
lblQ7B.textContent = arrQZ7.qz7B.txtValue; // set text of label to the value in the object
const q7Bvalue = document.querySelector("#question7B"); // set a var to the actual radio input
q7Bvalue.value = arrQZ7.qz7B.correct; // set the value of the input to the value in the object
// ---- OPTION 7C ---- //
const lblQ7C = document.querySelector("#label7C"); // set a var to the field label on the radio
lblQ7C.textContent = arrQZ7.qz7C.txtValue; // set text of label to the value in the object
const q7Cvalue = document.querySelector("#question7C"); // set a var to the actual radio input
q7Cvalue.value = arrQZ7.qz7C.correct; // set the value of the input to the value in the object
// ---- OPTION 7D ---- //
const lblQ7D = document.querySelector("#label7D"); // set a var to the field label on the radio
lblQ7D.textContent = arrQZ7.qz7D.txtValue; // set text of label to the value in the object
const q7Dvalue = document.querySelector("#question7D");
q7Dvalue.value = arrQZ7.qz7D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt7Btn = document.querySelector("#nxt7Btn"); // get "Next" button and set to var
const q7CorrectMsg = document.querySelector("#q7CorrectMsg"); // get correct message alert and set to var
const q7IncorrectMsg = document.querySelector("#q7IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q7Answers = document.forms.fq7.elements.question7; // set radio elements w/ name of question7 to q7Answers
let q7FinalAnswer = ""; // placeholder for final answer after submit


//! -- QZ8 ELEMENTS -- //
const qz8Div = document.querySelector("#qz8"); // set a var to <div> with corresponding qz#Div
const question8 = document.querySelector("#question8"); // set var to the <p> with question's #id
const question8TXT = arrQZ8.question; // set var to question value in questions array object
question8.textContent = question8TXT; // set question's text content on page to txt var
// ---- OPTION 8A ---- //
const lblQ8A = document.querySelector("#label8A"); // set a var to the field label on the radio
lblQ8A.textContent = arrQZ8.qz8A.txtValue; // set text of label to the value in the object
const q8Avalue = document.querySelector("#question8A"); // set a var to the actual radio input
q8Avalue.value = arrQZ8.qz8A.correct; // set the value of the input to the value in the object
// ---- OPTION 8B ---- //
const lblQ8B = document.querySelector("#label8B"); // set a var to the field label on the radio
lblQ8B.textContent = arrQZ8.qz8B.txtValue; // set text of label to the value in the object
const q8Bvalue = document.querySelector("#question8B"); // set a var to the actual radio input
q8Bvalue.value = arrQZ8.qz8B.correct; // set the value of the input to the value in the object
// ---- OPTION 8C ---- //
const lblQ8C = document.querySelector("#label8C"); // set a var to the field label on the radio
lblQ8C.textContent = arrQZ8.qz8C.txtValue; // set text of label to the value in the object
const q8Cvalue = document.querySelector("#question8C"); // set a var to the actual radio input
q8Cvalue.value = arrQZ8.qz8C.correct; // set the value of the input to the value in the object
// ---- OPTION 8D ---- //
const lblQ8D = document.querySelector("#label8D"); // set a var to the field label on the radio
lblQ8D.textContent = arrQZ8.qz8D.txtValue; // set text of label to the value in the object
const q8Dvalue = document.querySelector("#question8D"); // set a var to the actual radio input
q8Dvalue.value = arrQZ8.qz8D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt8Btn = document.querySelector("#nxt8Btn"); // get "Next" button and set to var
const q8CorrectMsg = document.querySelector("#q8CorrectMsg"); // get correct message alert and set to var
const q8IncorrectMsg = document.querySelector("#q8IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q8Answers = document.forms.fq8.elements.question8; // set radio elements w/ name of question8 to q8Answers
let q8FinalAnswer = ""; // placeholder for final answer after submit


//! -- QZ9 ELEMENTS -- //
const qz9Div = document.querySelector("#qz9"); // set a var to <div> with corresponding qz#Div
const question9 = document.querySelector("#question9"); // set var to the <p> with question's #id
const question9TXT = arrQZ9.question; // set var to question value in questions array object
question9.textContent = question9TXT; // set question's text content on page to txt var
// ---- OPTION 9A ---- //
const lblQ9A = document.querySelector("#label9A"); // set a var to the field label on the radio
lblQ9A.textContent = arrQZ9.qz9A.txtValue; // set text of label to the value in the object
const q9Avalue = document.querySelector("#question9A"); // set a var to the actual radio input
q9Avalue.value = arrQZ9.qz9A.correct; // set the value of the input to the value in the object
// ---- OPTION 9B ---- //
const lblQ9B = document.querySelector("#label9B"); // set a var to the field label on the radio
lblQ9B.textContent = arrQZ9.qz9B.txtValue; // set text of label to the value in the object
const q9Bvalue = document.querySelector("#question9B"); // set a var to the actual radio input
q9Bvalue.value = arrQZ9.qz9B.correct; // set the value of the input to the value in the object
// ---- OPTION 9C ---- //
const lblQ9C = document.querySelector("#label9C"); // set a var to the field label on the radio
lblQ9C.textContent = arrQZ9.qz9C.txtValue; // set text of label to the value in the object
const q9Cvalue = document.querySelector("#question9C"); // set a var to the actual radio input
q9Cvalue.value = arrQZ9.qz9C.correct; // set the value of the input to the value in the object
// ---- OPTION 9D ---- //
const lblQ9D = document.querySelector("#label9D"); // set a var to the field label on the radio
lblQ9D.textContent = arrQZ9.qz9D.txtValue; // set text of label to the value in the object
const q9Dvalue = document.querySelector("#question9D"); // set a var to the actual radio input
q9Dvalue.value = arrQZ9.qz9D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt9Btn = document.querySelector("#nxt9Btn"); // get "Next" button and set to var
const q9CorrectMsg = document.querySelector("#q9CorrectMsg"); // get correct message alert and set to var
const q9IncorrectMsg = document.querySelector("#q9IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q9Answers = document.forms.fq9.elements.question9; // set radio elements w/ name of question9 to q9Answers
let q9FinalAnswer = ""; // placeholder for final answer after submit


//! -- QZ10 ELEMENTS -- //
const qz10Div = document.querySelector("#qz10"); // set a var to <div> with corresponding qz#Div
const question10 = document.querySelector("#question10"); // set var to the <p> with question's #id
const question10TXT = arrQZ10.question; // set var to question value in questions array object
question10.textContent = question10TXT; // set question's text content on page to txt var
// ---- OPTION 10A ---- //
const lblQ10A = document.querySelector("#label10A"); // set a var to the field label on the radio
lblQ10A.textContent = arrQZ10.qz10A.txtValue; // set text of label to the value in the object
const q10Avalue = document.querySelector("#question10A"); // set a var to the actual radio input
q10Avalue.value = arrQZ10.qz10A.correct; // set the value of the input to the value in the object
// ---- OPTION 10B ---- //
const lblQ10B = document.querySelector("#label10B"); // set a var to the field label on the radio
lblQ10B.textContent = arrQZ10.qz10B.txtValue; // set text of label to the value in the object
const q10Bvalue = document.querySelector("#question10B"); // set a var to the actual radio input
q10Bvalue.value = arrQZ10.qz10B.correct; // set the value of the input to the value in the object
// ---- OPTION 10C---- //
const lblQ10C = document.querySelector("#label10C"); // set a var to the field label on the radio
lblQ10C.textContent = arrQZ10.qz10C.txtValue; // set text of label to the value in the object
const q10Cvalue = document.querySelector("#question10C"); // set a var to the actual radio input
q10Cvalue.value = arrQZ10.qz10C.correct; // set the value of the input to the value in the object
// ---- OPTION 10D ---- //
const lblQ10D = document.querySelector("#label10D"); // set a var to the field label on the radio
lblQ10D.textContent = arrQZ10.qz10D.txtValue; // set text of label to the value in the object
const q10Dvalue = document.querySelector("#question10D"); // set a var to the actual radio input
q10Dvalue.value = arrQZ10.qz10D.correct; // set the value of the input to the value in the object
// -- BUTTONS AND MESSAGING -- //
const nxt10Btn = document.querySelector("#nxt10Btn"); // get "Next" button and set to var
const q10CorrectMsg = document.querySelector("#q10CorrectMsg"); // get correct message alert and set to var
const q10IncorrectMsg = document.querySelector("#q10IncorrectMsg"); // get incorrect message alert & set to var
// -- ANSWER RESPONSES -- //
const q10Answers = document.forms.fq10.elements.question10; // set radio elements w/ name of question10 to q10Answers
let q10FinalAnswer = ""; // placeholder for final answer after submit


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
//----------------------------//
// startingPoint() sets a class baseline that shows the beginning of quiz div and hides all others, 
// and sets the timer to 0.
function startingPoint() {
    // if the quiz starting point (qz0Div) is hidden, display it. Else, do nothing.
    if (qz0Div.classList.contains("hidden")) { qz0Div.classList.remove("hidden"); } else { return; }
    // if the 1st question (qz1Div) is hidden, do nothing. Else, hide it.
    if (qz1Div.classList.contains("hidden")) { return; } else { qz1Div.classList.add("hidden"); }
    // if the 2nd question (qz2Div) is hidden, do nothing. Else, hide it.
    if (qz2Div.classList.contains("hidden")) { return; } else { qz2Div.classList.add("hidden"); }
    // if the 3rd question (qz3Div) is hidden, do nothing. Else, hide it.
    if (qz3Div.classList.contains("hidden")) { return; } else { qz3Div.classList.add("hidden"); }
    // if the 4th question (qz4Div) is hidden, do nothing. Else, hide it.
    if (qz4Div.classList.contains("hidden")) { return; } else { qz4Div.classList.add("hidden"); }
    // if the 5th question (qz5Div) is hidden, do nothing. Else, hide it.
    if (qz5Div.classList.contains("hidden")) { return; } else { qz5Div.classList.add("hidden"); }
    // if the 6th question (qz6Div) is hidden, do nothing. Else, hide it.
    if (qz6Div.classList.contains("hidden")) { return; } else { qz6Div.classList.add("hidden"); }
    // if the 7th question (qz7Div) is hidden, do nothing. Else, hide it.
    if (qz7Div.classList.contains("hidden")) { return; } else { qz7Div.classList.add("hidden"); }
    // if the 8th question (qz8Div) is hidden, do nothing. Else, hide it.
    if (qz8Div.classList.contains("hidden")) { return; } else { qz8Div.classList.add("hidden"); }
    // if the 9th question (qz9Div) is hidden, do nothing. Else, hide it.
    if (qz9Div.classList.contains("hidden")) { return; } else { qz9Div.classList.add("hidden"); }
    // if the 10th question (qz10Div) is hidden, do nothing. Else, hide it.
    if (qz10Div.classList.contains("hidden")) { return; } else { qz10Div.classList.add("hidden"); }
    // if the score tally (qz11Div) is hidden, do nithing. Else, hide it.
    if (qz11Div.classList.contains("hidden")) { return; } else { qz11Div.classList.add("hidden"); }
    // if the scoreboard (scoresDiv) is hidden, do nothing.  Else, hide it.
    if (scoresDiv.classList.contains("hidden")) { return; } else { scoresDiv.classList.add("hidden"); }
    // set the time to 0
    var secondsLeft = 0;
    // ...and display the 0-set timer in the time remaining div.
    spanTime.textContent = Math.floor(secondsLeft);
}
//------------------------------------------------------------//
// highScores() checks if quiz is in process or submission isn't complete, 
// & throws an alert. Else, show score board.
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
//-----------------------------------------------------------------//
// scoreTimer() does the following:
// starts a timer that counts down from a set number of seconds
// if an answer is wrong, the time decrements by 10 seconds and then continues counting down.
// once the timer reaches zero an alert/confirm is thrown indicating to the user that time is up
// then the user is "directed" to the score Tally page/div (visibility is toggled to hide current slide and display score tally div)

function scoreTimer() {
    // display the initial time state on-screen as 60
    spanTime.textContent = Math.floor(secondsLeft);
    console.log("--------------------");
    console.log("scoreTime() has kicked off");
    // create a setInterval loop to a var called timerInterval
    var timerInterval = setInterval(function() {
        // on each cycle of the loop, decrement the secondsLeft var by 1 and subtract any answer penalty;
        secondsLeft = secondsLeft - timePenalty - 1;
        // Reset timePenalty so it's only applied 1x and is read for the next possible wrong answer 
        timePenalty = ""
        // display the time state on screen to the current decremented seconds
        spanTime.textContent = Math.floor(secondsLeft);
        // the screen is NOT a question
        if (!qz0Div.classList.contains("hidden") || !qz11Div.classList.contains("hidden") || !scoresDiv.classList.contains("hidden")) { 
            clearInterval(timerInterval); // stop the timer
        // else, if questions are currently being answered/quiz is in progress, AND if the seconds run out...
        } else if (secondsLeft === 0) {
          clearInterval(timerInterval); // stop the time
          alert("Time's up!"); // alert the user that time is up
          startingPoint(); // reset the time and div visibilities to the starting point...
          qz0Div.classList.add("hidden"); // ...then hide the quiz start state...
          qz11Div.classList.remove("hidden"); // ...and show the tally page...
          scoreTitle.textContent = "You have run out of time."; // ...and change score tally title to time ran out vs quiz completed
        } 
        // interval timer loops every 1000 milliseconds aka every second    
    }, 1000);
}
//-------------------------------------------------------//
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
    console.log(q1Answers);
    q1FinalAnswer = q1Answers.value;
    console.log(q1FinalAnswer);
    if(q1FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ2Answers() {
    // get Q2's Answers and Validate
    console.log(q2Answers);
    q2FinalAnswer = q2Answers.value;
    console.log(q2FinalAnswer);
    if(q2FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ3Answers() {
    // get Q3's Answers and Validate
    console.log(q3Answers);
    q3FinalAnswer = q3Answers.value;
    console.log(q3FinalAnswer);
    if(q3FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ4Answers() {
    // get Q4's Answers and Validate
    console.log(q4Answers);
    q4FinalAnswer = q4Answers.value;
    console.log(q4FinalAnswer);
    if(q4FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ5Answers() {
    // get Q5's Answers and Validate
    console.log(q5Answers);
    q5FinalAnswer = q5Answers.value;
    console.log(q5FinalAnswer);
    if(q5FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ6Answers() {
    // get Q6's Answers and Validate
    console.log(q6Answers);
    q6FinalAnswer = q6Answers.value;
    console.log(q6FinalAnswer);
    if(q6FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ7Answers() {
    // get Q7's Answers and Validate
    console.log(q7Answers);
    q7FinalAnswer = q7Answers.value;
    console.log(q7FinalAnswer);
    if(q7FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ8Answers() {
    // get Q8's Answers and Validate
    console.log(q8Answers);
    q8FinalAnswer = q8Answers.value;
    console.log(q8FinalAnswer);
    if(q8FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ9Answers() {
    // get Q9's Answers and Validate
    console.log(q9Answers);
    q9FinalAnswer = q9Answers.value;
    console.log(q9FinalAnswer);
    if(q9FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function getQ10Answers() {
    // get Q10's Answers and Validate
    console.log(q10Answers);
    q10FinalAnswer = q10Answers.value;
    console.log(q10FinalAnswer);
    if(q10FinalAnswer == "false") {
        timePenalty = 10;
    }
}
function scoreQuizAnswers() {
    // score quiz answers array
    console.log("placeholder");
}

//----------------------------------------------------------//
// nextQz1Qz2() does the following:
// --- 1. Toggles visibility of question #1 (qz1Div) and the hidden question #2 (qz2Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#2)
function nextQz1Qz2() {
    getQ1Answers();
    arrScore.push(q1FinalAnswer);
    qz1Div.classList.add("hidden");
    qz2Div.classList.remove("hidden");
}
//----------------------------------------------------------//
// nextQz2Qz3() does the following:
// --- 1. Toggles visibility of question #2 (qz2Div) and the hidden question #3 (qz3Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#3)
function nextQz2Qz3() {
    getQ2Answers();
    arrScore.push(q2FinalAnswer);
    qz2Div.classList.add("hidden");
    qz3Div.classList.remove("hidden");
}
//-------------------------------------------------------//
// nextQz3Qz4() does the following:
// --- 1. Toggles visibility of question #3 (qz3Div) and the hidden question #4 (qz4Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#4)
function nextQz3Qz4() {
    getQ3Answers();
    arrScore.push(q3FinalAnswer);
    qz3Div.classList.add("hidden");
    qz4Div.classList.remove("hidden");
}
//------------------------------------------------------//
// nextQz4Qz5() does the following:
// --- 1. Toggles visibility of question #4 (qz4Div) and the hidden question #5 (qz5Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#5)
function nextQz4Qz5() {
    getQ4Answers();
    arrScore.push(q4FinalAnswer);
    qz4Div.classList.add("hidden");
    qz5Div.classList.remove("hidden");
}
//-------------------------------------------------------//
// nextQz5Qz6() does the following:
// --- 1. Toggles visibility of question #5 (qz5Div) and the hidden question #6 (qz6Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#6)
function nextQz5Qz6() {
    getQ5Answers();
    arrScore.push(q5FinalAnswer);
    qz5Div.classList.add("hidden");
    qz6Div.classList.remove("hidden");
}
//------------------------------------------------------//
// nextQz6Qz7() does the following:
// --- 1. Toggles visibility of question #6 (qz6Div) and the hidden question #7 (qz7Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#7)
function nextQz6Qz7() {
    getQ6Answers();
    arrScore.push(q6FinalAnswer);
    qz6Div.classList.add("hidden");
    qz7Div.classList.remove("hidden");
}
//----------------------------------------------------//
// nextQz7Qz8() does the following:
// --- 1. Toggles visibility of question #7 (qz7Div) and the hidden question #8 (qz8Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#8)
function nextQz7Qz8() {
    getQ7Answers();
    arrScore.push(q7FinalAnswer);
    qz7Div.classList.add("hidden");
    qz8Div.classList.remove("hidden");
}
//-----------------------------------------------------//
// nextQz8Qz9() does the following:
// --- 1. Toggles visibility of question #8 (qz8Div) and the hidden question #9 (qz9Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#9)
function nextQz8Qz9() {
    getQ8Answers();
    arrScore.push(q8FinalAnswer);
    qz8Div.classList.add("hidden");
    qz9Div.classList.remove("hidden");
}
//----------------------------------------------------//
// nextQz9Qz10() does the following:
// --- 1. Toggles visibility of question #9 (qz9Div) and the hidden question #2 (qz10Div), simulating navigation effect
// --- 2. Disables the Next button until an answer is selected
// --- 3. Logs the selected answer as correct or incorrect in the completed score array in the appropriate position
// --- 4. Toggles visibility of the hidden correct-answer / incorrect-answer feedback and disables further answer choice
// --- 5. Proceeds to the next question (#10)
function nextQz9Qz10() {
    getQ9Answers();
    arrScore.push(q9FinalAnswer);
    qz9Div.classList.add("hidden");
    qz10Div.classList.remove("hidden");
}
//----------------------------------------------------//
// scoreTally() does the following:
// --- 1. Toggles visibility of question #10 (qz10Div) and the hidden score tally div (qz11Div), simulating navigation effect
// --- 2. Calculates the score based on answers correct (from the scores array) and the time
// --- 3. enters the score, time, and answers correct in the appropriate span placeholders for the those values
function scoreTally() {
    getQ10Answers();
    arrScore.push(q10FinalAnswer);
    console.log(arrScore);
    qz10Div.classList.add("hidden");
    qz11Div.classList.remove("hidden");
    scoreTitle.textContent = "You have completed this quiz.";
}
//-----------------------------------------------------//
// scoreBoard() does the following:
// --- 1. Toggles visibility of the score tally div (qz11Div) and the hidden scoreboard div (scoresDiv), simulating navigation effect
// --- 2. writes to the scoreboard table the initials input, the time, the calculated score, questions correct
// --- 3. Disables submit score btn until initials are provided
function scoreBoard() {
    qz11Div.classList.add("hidden");
    scoresDiv.classList.remove("hidden");
}
//-----------------------------------------------------//
// clearScores() does the following:
// --- 1. clears the score array if not already clear
// --- 2. clears the scoreboard table
function clearScores() {
    // this function will clear the scores in the ScoreBoard when the clearScoresBtn is clicked
    console.log("clearScoresBtn button was clicked");
}
//----------------------------------------------------//


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
