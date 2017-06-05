$(document).ready(function() {
   
    // Play again button
    $("#playAgain").hide();

    // Sets user's default score at start of game to zero
    parseInt($('#correct').html(0));
    parseInt($('#incorrect').html(0));
    parseInt($('#unanswered').html(0));

    var score = parseInt($('#userScore').html());

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;



}
// Start button

// When start button is clicked, timer starts countind down from 2:00 minutes

// Load questions and answers

// Multiple choice answers: user can select only one

// When timer runs out (120 seconds?) game ends

// Game over box with number of correct answers, incorrect answers, unanswered questions, and play again button

// Possible extra functionality if I have time: based on the user's score, assign a picture and text.

    //Ex: Correct: x / Incorrect: x 
    // 90-100%>"Congratulations, you're Michael Bluth, the man who knows everything 
    //about his family...for better or for worse."

    // 60-89%>: "You're Steve Holt!" Not the brightest, but what charisma!

    // 40-60%: "You're J. Walter Weatherman: And *that's* why you alwyas watch *Arrested Development* with
    //a little more attention to detail"

    // 0-40%: "You're GOB, Lucille's least favorite child."

// Parallax effect for header - if time
// var jumboHeight = $('.jumbotron').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });


