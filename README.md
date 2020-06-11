# elearning-assessment-code-quiz

Javascript-based quiz application that dynamically populates questions and answers in the html, and draws from as well as stores values through localStorage API and DOM manipulations. Allows timed assessment with timing dynamically set and configurable within the appliclation javascript, and gamified challenge aspects including time penalties for incorrect answers and persistent scoreboard ranking. The application has potential for elearning module interruptive assessments and checkpoints, allowing users to take a mid-module quiz to self-checks how well they can recall rote and fast-recall concepts on a given topic, including the potential for gamification aspect of knowledge-check comparison against peers via a arcade-ish scoreboard. The application features also include dynamically updated HTML and CSS (driven by classic JavaScript - no jQuery selection, methods, or shorthand; no additional js libraries leveraged). The interface is clean, polished, adaptable via standard Bootstrap 4.5.0 classes, and responsive.

# The Quiz Interface & Basic Quiz Flow

Though dynamically creating the actual div at point of answer submission would abbreviate the code, the current structural method was intentional. This application is structurally detailed with the divs clearly commented and structured in the HTML at the outset, and the content of the divs and quiz behavior defined via the JavaScript. It is possible that I may refactor the application down-the-road to abbreviate the code, but in this initial version of the application, the detailed layout across javascript and HTML should help others edit and repurpose the library to their own needs.

The quiz has a clean UI with all progressive quiz related action taking place in a screen-centered div container that holds everything from pre-quiz instructions, to all question/answers, score results, and even a scoreboard for comparing results against previous attempts.

The quiz begins on a starting view with directions, a dynamically generated topic is displayed in the directions content, and there is verbiage for the penalty notification for incorrect answers. This verbiage can be updated in the HTML but the penalty value should be adjusted in the functions that fire upon click of each next button.

At the top of the quiz throughout the experience is an option to view the score board via a "High Scores" button. The High Scores/Scoreboard access is only accessible from the pre-quiz start view or upon completion of the quiz on the score tally view. The ability to access the scoreboard during the quiz has been intentionally disabled to ensure users commit to completing the quiz, even if completed with all incorrect responses or questions unanswered.

At the center of the top header area of the quiz is the quiz title. The title is dynamically populated from the Javascript. The textContent of the title can be changed on line 5 in the script.js.

Also at the top of the quiz, on the right is a "Time Remaining" clock that begins countdown upon start of the quiz. Upon start, the Time Remaining clock displayed at the top of the page begins countdown at a dynamically set and populated duration. This is editable in the JavaScript on line 431 in the script.js file, in the variable "originalTimerValue". The initial starting time in the deployed application is 120 seconds. If the user doesn't complete the quiz in time, the quiz ends and they are immediately routed to the score results (aka score tally) page.

The user must complete 10 questions - all defined and dynamically populated via JavaScript from the script.js file in the repository. Like the title, topic, and most other content elements populated in the UI, you can edit these in the script.js file. The quiz question object arrays contain the question and four answer choices including true/false indication of whether the choice is correct or not. These objects can be found in lines 13-82.

Upon completion of the last question (question 10 of 10) (within the time allotted), the score results or score tally us displayed. If the user chooses to do so, they may enter their initials and submit their results to be featured on the ScoreBoard. The application limits the entry to no more than three characters, but in this first iteration - like most modern arcade scoreboards - the app allows any type of character to be used included alpha, numeric, and special characters. Submission of the initials and score results automatically routes the user to view the scoreboard. If the user does not elect to submit their initials, they may still go on to view the Scoreboard from the Score Tally view by clicking the High Scores button in the header.

The Scoreboard dynamically populate the results from previous score submissions. The full scoreboard is held in the user's localStorage and recalled and generated when the user views the Scoreboard. The application currently has a button that, on-click, clears the scoreboard including the results held in localStorage. This does a full erase of the scores which are not tied to any database to ensure portability of this project. I will likely publish a version downstream that doesn write and recall to a database with the use of a node or express server paired with a db such as MySQL or MongoDB. For this initial application, however, all values - though session independent - are only held in localStorage. This allows the app score results to persist between sessions (until cleared), but do not currently have a db location in which they are stored/from which they are recalled and written to the page.

Both the Score Tally and Scoreboard views also provide a button to retake the quiz if the user isn't satisfied with their score.

# Scoring & Displayed Results

The scoring is creative. It is based on number correct and then adjusted with a percent-time-complete modifier to result in a weighted score that is a result of _both_ the number correct and the speed at which they arrived. Penalty deducations that occur on submission of each question's answer ensure that rapidly clicking through the quiz and answer only one or two questions correctly will never yield a weighted score that can outrank ones in which all or the majority of questions are answered correctly. The Scoreboard displays a number of data tied to the user's results. The results display their rank in the current scoreboard, their initials, the number of correct answers, the final time remaining, and final weighted score. Each of these are dynamically populated based on calculations that draw from the countdown timer, the original timer value, the array of answers and their values compared against the original correct/incorrect determination on setup, and the compared scores/times/correct answers of all submitted responses parsed from local storage (displayed sequentially from highest score, quickest time, and most correct responses at the top/#1).

# Reviewing the Deployed Application

You can review the deployed application at [https://srmchartroom.github.io/elearning-assessment-code-quiz/](https://srmchartroom.github.io/elearning-assessment-code-quiz/).

# Potential Future Enhancements

A number of future enhancements are being planned. Some of the following _may_ be included in future updates/releases of this repository:

- ADMIN:
  - Admin screen that provides functionality to input questions, answers, and correct/incorrect identifiers without having to touch the javascript
  - Ability to set up a question bank for the quiz
  - Ability to set timer starting value from an admin screen or function available after recognized authentication of valid admin
  - Ability to set penalty value, including
  - Ability to set whether quiz is timed or not, and dynamically adjust answer handling, final score, and scoreboard display based on it
  - Ability to randomize the answer order
  - Ability to randomize and pull random questions from a bank of questions held in memory
  - Connect to MySQL or MongoDB database via node or express server
  - Consolidation of dynamic generation of quiz divs (rather than breaking out for explicitness to suport reviewing developers to use and update)
  - Shift clearing scoreboard functionality to an admin panel - or recognized authentication of admin before displaying the function
  - Ability to set a routing/goto URL and "Continue" button/function to proceed from the quiz to the next learning module.
  - Ability to write a final SCORM-compliant object/output for admins to leverage quiz results for use in an LMS.
- USER:
  - Ability for user to remove only their score from the scoreboard
  - Ability for user to toggle whether _they_ want to time the quiz or not, and dynamically shift scoreboard criteria accordingly

**Watch for future releases. And feel free to message me or open an issue to suggest other ideas for future enhancements.**
