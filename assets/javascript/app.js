$(document).ready(function() {
  
	var timer;
	var numberCorrect = 0; // starting number of correct answers
	var numberIncorrect = 0;
	var missed = 0;
	var start = 250;  // Set variable for timer start
    var answers = ["C", "C", "A", "D", "B", "A", "B", "D", "C", "B", "C", "C", "A", "B", "B", "C", "A", 
    "D", "B", "C", "D", "B", "A", "B", "B", "D", "C", "C", "C", "B", "D", "B", "A", "C", "C", "A", "D", 
    "C", "B", "A", "B", "B", "C", "D", "A", "B", "D", "C", "A", "C"], 
        tot = answers.length;

    //Hide main content, timer, and results when page loads
    $('.content').hide();
    $('.gameTimer').hide();
    $('.gameOver').hide();
 
    //Start game when user clicks button
	$('#gameStart').on('click', gameStart);

    //This function starts the game 
	function gameStart() {
		$('.content').css('display', 'block');
        $('.start-img').hide();
        $('.gameOver').hide();
        $('.gameTimer').css('display', 'block');

		//Starts the game's timer
		// var controls the startTimer function 
		timer = setInterval(startTimer, 1000);
		$('#gameStart').hide();
	}

    	//Starts timer function
	    function startTimer() {
            start -= 1;
            $('#timeLeft').html(start);
            if (start < 25) {
                clearInterval(timer);
                $('.content').hide();
                $('.gameover').display();
                $('.lose').show();
                $('.lose').html('Oh, no—you ran out of time! Would you like to play again?');
                $('#gameImg').attr('src', questions[curQuestion].imgSrc);
		}
	}

    function getCheckedValue( radioName ){
        var radios = document.getElementsByName( radioName ); // Get radio group by-name
        for(var y=0; y<radios.length; y++)
        if(radios[y].checked) return radios[y].value; // return the checked value
    }

    function getScore(){
    var score = 0;
    for (var i=0; i<tot; i++)
        if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
    return score;
    }

    function returnScore(){
    alert("Your score is "+ getScore() +"/"+ tot);
    }   

    //Play again button
    $("#playAgain").hide();

});
// Start button

// When start button is clicked, timer starts counting down from 2:00 minutes

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

    // // Sets user's default score at start of game to zero
    // parseInt($('#correct').html(0));
    // parseInt($('#incorrect').html(0));
    // parseInt($('#unanswered').html(0));

    // var score = parseInt($('#userScore').html());

    // var correctAnswers = 0;
    // var incorrectAnswers = 0;
    // var unansweredQuestions = 0;

    // $('#correct').html(correct);
    // $('#incorrect').html(incorrect);
    // $('#unanswered').html(unanswered);


