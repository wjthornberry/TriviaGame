$(document).ready(function() {
    // $("#introSection").hide();
    $("#messageSection").hide();
});

    $("#questionSpace").hide()

    var correctCounter = 0,
        incorrectCounter = 0,
        unansweredCounter = 0,
        currentQuestionIndex = 0;


    var congratsMessages = ['Phenomenal!', 'Nice!', "You're an Arrested Development Trivia phenom!"];

    // This function creates a random number
    function randomNum(x) {
        var roll = Math.floor(Math.random() * x);
        return roll;
    }
    // Randomize congratulation messages to user
    function randomCongrats() {
        var messageRoll = randomNum(congratsMessages.length);
    }

    function countDown() {
        $('.pickAnswer').click(function() {
            $(this).data('clicked', true);
        });
        var i = 10;
        var myInterval = setInterval(function() {

            if (i < 10) {
                $('#timerSeconds').html("0" + i);
                $(".pickAnswer").on("click", function() {
                    clearInterval(myInterval);
                })
            } else {
                $('#timerSeconds').html(i);
                $(".pickAnswer").on("click", function() {
                    clearInterval(myInterval);
                })
            }

            if (i === 0) {
                unansweredCounter++;
                clearInterval(myInterval);
                currentQuestionIndex++;
                // $('#timer').effect("pulsate", {
                //     times: 25
                // }, 1000 * 5);
                i = 30;
                postQuestion(currentQuestionIndex);
            } else {
                i--;
            }
        }, 1000);
    }

    // The trivia questions and answers live below
    var questions = [
        // question 1
        {
            "q": 'Who is the uncredited narrator?',
            "c": ['Rob Reiner', 'Rob Schneider', 'Ron Howard', 'Ronnie James Dio'],
            "answer": 2
        },
        // question 2
        {
            "q": "What\’s the name of the proposed subdivision where the model home sits?",
            "c": ["Hidden Valley", "Sullen Valley", "Sudden Valley", 'Saddam Valley'],
            "answer": 2
        },
        // question 3
        {
            "q": "According to Michael, what is the most important thing in life?",
            "c": ['Happiness', 'Breakfast', 'Always remembering to leave a note', 'Family'],
            "answer": 3
        },
        // question 4
        {
            "q": "All of the following Bluth family body alterations are shown or alluded to EXCEPT:",
            "c": ['Oscar\'s fake hip', 'Lindsay\'s fake nose', 'Buster\'s fake hand', 'Lucille\'s fake neck'],
            "answer": 0
        },
        // question 5
        {
            "q": "What is the Milford School's motto?",
            "c": ['"Silence is golden"', '"Children should be neither seen nor heard"', '"Better never than late"','"Avoid making huge mistakes"'],
            "answer": 1
        },
        // question 6
        {
            "q": "What do George Michael and Maeby call their grandparents?",
            "c": ["Grandma and Grandpa", "Gangy and Pop-Pop", "Gangy and Poppy", "Gangy and George Sr."],
            "answer": 1
        },
        // question 7
        {
            "q": "Gob’s puppet, Franklin, has a big hit called “It Ain’t Easy Being White.” What else does Franklin sing?",
            "c": ['"(Everything I Do) I Do It for You"', '"You\'re as Cold As Ice"', '"Afternoon Delight"', '"You\'re a Crook, Captain Hook"'],
            "answer": 0
        },
        // question 8
        {
            "q": "Who appears in the Cornballer infomercial alongside George Bluth??",
            "c": ['Martha Stewart', 'Billy Mays', 'Ron Popeil', 'Richard Simmons'],
            "answer": 3
        },
        // question 9
        {
            "q": "Who shares Buster's proclivity for back-rubs?",
            "c": ['Carl Weathers', 'Tobias', 'Uncle Oscar', 'Lucille Austero'],
            "answer": 2
        },
        // question 10
        {
            "q": "George Sr. peddles the video series \"Caged Wisdom\" from prison. What earlier series did he pioneer?",
            "c": ['"Girls with Low Self-Esteem"', '"Boyfights"', '"One-Arm Yourself With the Truth"', '"Attic Antics"'],
            "answer": 1
        },
        // question 11
        {
            "q": "What's the made-up English section of Orange County called??",
            "c": ['The Little-ish Isles', 'Tiny London Town', 'Wee Britain', 'Mini U.K.'],
            "answer": 2
        },
             // question 12
        {
            "q": "Whose chicken dance sound is \"Coo-coo-ca-CHAH!?\"",
            "c": ['Lindsay', 'GOB', 'George', 'Lucille'],
            "answer": 2
        },
             // question 13
        {
            "q": "Which of the following flashbacks receives a 'Footage Not Found' title card?",
            "c": ['Tobias and Lindsay\'s great times', 'Lucille and George Sr. being great parents', 'Michael crashing the car', 'A standing ovation for GOB and Franklin'],
            "answer": 0
        },
             // question 14
        {
            "q": "Which character was never intended to be a series regular?",
            "c": ['GOB', 'George Sr.', 'Michael', 'Buster'],
            "answer": 1
        },
             // question 15
        {
            "q": "What song did the Bluth family banana stand inspire?",
            "c": ['"Afternoon Delight"', '"Big Yellow Joint"', '"Sex a Peel"', '"I Saw the Sign"'],
            "answer": 1
        },
             // question 16
        {
            "q": "What is Carl Weathers's goal in life?",
            "c": ['To get a rematch against Sylvester Stallone', 'To cook the best stew', 'To get things for free or at rock-bottom discounts', 'To get "Action Jackson 2" made'],
            "answer": 2
        },
             // question 17
        {
            "q": "George Michael made a home movie that continually resurfaces. What original viral video is it a nod to?",
            "c": ['"Star Wars Kid"', '"Chocolate Rain"', '"Dancing Baby"', '"News reporter falls while stomping grapes"'],
            "answer": 0
        },
             // question 18
        {
            "q": "What crime does George Sr. acknowledge he might have committed?",
            "c": ['Murder...with an asterisk', 'Arson-ish', 'Low-impact larceny', 'Light treason'],
            "answer": 3
        },
             // question 19
        {
            "q": "Which disguise is \"not\" in Gene Paremesan\'s repertoire?",
            "c": ['A blue bear', ' A cowboy', 'A firefighter', 'A doctor'],
            "answer": 1
        },
             // question 20
        {
            "q": "What prompted Lucille to adopt Annyong?",
            "c": ['Buster was getting old enough to leave home', 'Buster had alienated the Motherboy judges', 'Buster wouldn\'t finish his cottage cheese', 'She was desperate for someone strong enough to keep GOB away from her'],
            "answer": 2
        },
             // question 21
        {
            "q": "Which of the following does Buster NOT aspire to do after being freed from his mother?",
            "c": ['Get a checking account', 'Get punched in the face', 'Make love to a woman', 'Try guacamole'],
            "answer": 3
        },
             // question 22
        {
            "q": "What is one of Buster's favorite sayings?",
            "c": ['"Hey, there"', '"Hey, mother"', '"Hey, brother"', '"We\'re just blowin\ through naptime!"'],
            "answer": 2
        },
             // question 23
        {
            "q": "What song do George-Michael and Maeby sing together that creates an awkward moment?",
            "c": ['"Gangsta\'s Paradise"', '"I Feel Like Making Love"', '"Can\'t Get No Satisfaction"', '"Afternoon Delight"'],
            "answer": 3
        },
             // question 24
        {
            "q": "\"No touching!\" is one of the serie''s frequently recurring jokes. Which spin does it get?",
            "c": ['Some touching!', 'More touching!', 'Less touching!', 'Never touching!'],
            "answer": 1
        },
             // question 25
        {
            "q": "Maeby, moonlighting as a film executive, works on all of the following films EXCEPT:?",
            "c": ['"The Old Man and the Sea"', '"Spring Breakdance"', '"The Ocean Walker"', '"Snowboarding School 2"'],
            "answer": 1
        },
             // question 26
        {
            "q": "What's Uncle Oscar's claim to fame?",
            "c": ['He has been arrested more than 40 times', 'He was once charged with assault for attempting to rub a police officer’s back', 'He got the odometer on his camper to roll over three times', 'He wrote a song that was slammed by Joan Baez'],
            "answer": 3 
        },
             // question 27
        {
            "q": "Where do Lucille and Lindsay get into a headline-making brawl?",
            "c": ['Outside the Banana Stand', 'Clanky’s BBQ', 'Klimpy’s Family Style Restaurant', 'Plumpy’s Sushi and Waffle Restaurant'],
            "answer": 2 
        },
             // question 28
        {
            "q": "When do Gob and his wife first make love?",
            "c": ['After crashing their stolen shopping cart', 'Behind the seal meal bin at the aquarium', 'Right before signing their divorce papers', 'Behind the stage after the reunion show of Dr. Fünke’s 100% Natural Good-Time Family Band Solution'],
            "answer": 2
        },
             // question 29
        {
            "q": "Michael often delivers a disconcerted “her?” about George Michael’s girlfriend Ann. Which of Michael’s love interests causes George Michael to pose the question back to his dad?",
            "c": ['Rita', 'Marta', 'Maggie Lizer ', 'Ann’s mother, Mrs. Veal'],
            "answer": 2
        },
             // question 30
        {
            "q": "Which of these accidents does not result in hospitalization?",
            "c": ['Buster appears to slip into a coma', 'George Michael gets sunstroke', 'Gob is stabbed', 'Tobias is run over by a car'],
            "answer": 1
        },
             // question 31
        {
            "q": "What American Idol castoff fronts the band for Mock Trial With J. Reinhold?",
            "c": ['Jennifer Hudson', 'Clay Aiken', 'Sanjaya Malakar', 'William Hung'],
            "answer": 3
        },
             // question 32
        {
            "q": "Who ran over Tobias with a car?",
            "c": ['Lindsay', 'Barry Zuckerkorn', 'Sally Sitwell', 'Wayne Jarvis'],
            "answer": 1
        },
             // question 32
        {
            "q": "What title card is Lucille given in the pilot?",
            "c": ['Socialite', 'Onetime U.S.O. performer', 'Mother', 'Wife'],
            "answer": 0
        },
             // question 33
        {
            "q": "Which cause did Lindsay never fund-raise for?",
            "c": ['Stop the Hunger', 'Save the Wetlands', 'Save the African Newt (S.T.A.N.)', 'Hands Off Our Penises (H.O.O.P.)'],
            "answer": 2
        },
             // question 34
        {
            "q": "How many months did Buster spend in the womb?",
            "c": ['Five', 'Seven', 'Eleven', 'Thirteen'],
            "answer": 2
        },
             // question 35
        {
            "q": "How does Tobias end up pursuing the Blue Man Group?",
            "c": ['He mistakes them for a depression support group', 'He mistakes them for a therapeutic art class', 'He mistakes them for an avant-garde film he can audition for', 'He mistakes them for a bi-curious singles group'],
            "answer": 0
        },
             // question 36
        {
            "q": "What do GOB and Tony Wonder call magic-show audiences?",
            "c": ['Abracadabrubes', 'Tricky-Dicks', 'Oh-My-Gollies', 'Howdy-Doodats'],
            "answer": 3
        },
             // question 37
        {
            "q": "Who does Lucille get interviewed by on the street?",
            "c": ['A faux ShamWow guy', 'A faux Geraldo Rivera', 'A faux Michael Moore', 'A faux Billy Bush'],
            "answer": 2
        },
             // question 38
        {
            "q": "What modern holiday have Michael and George Michael honored through the years?",
            "c": ['Grandparents\' Day', 'Take Your Daughter to Work Day', 'International Talk Like a Pirate Day', 'Singer George Michael’s birthday'],
            "answer": 1
        },
             // question 39
        {
            "q": "Other than Buster, what other role did Tony Hale briefly play?",
            "c": ['A British soldier in a war movie', 'A member of the Hot Cops ', 'Great-great-grandfather Bernard Bluth', 'An excited member of the Cornballer infomercial audience'],
            "answer": 0
        },
             // question 40
        {
            "q": "When does Buster first drink alcohol as an adult?",
            "c": ['When he and Lucille Austero first prepare to make pop-pop', 'When he mistakes his mother’s boxed wine for a jumbo juice box', 'When he works at the Bluth Company construction site', 'When he and his Army buddies celebrate his first complete pull-up'],
            "answer": 1
        },
             // question 41
        {
            "q": "Arrested brilliantly dished up all of the following meta-moments EXCEPT:?",
            "c": ['Henry Winkler jumping a shark', 'Justine Bateman playing Jason Bateman\'s sister', 'Judge Reinhold gets a banana put in his tailpipe', 'Dan Castellaneta says “D’oh”'],
            "answer": 2
        },
             // question 42
        {
            "q": "What’s the Spanish word GOB and Michael both wrongly assume to be a man’s name?",
            "c": ['Perro', 'Guapo', 'Muchacho', 'Hermano'],
            "answer": 3
        },
             // question 43
        {
            "q": "What was the name of Michael Bluth’s late wife?",
            "c": ['Tracy', 'Stacey', 'Macy', 'Lacey'],
            "answer": 0
        },
             // question 44
        {
            "q": "Which of the following was NOT a Fünke family endeavor?",
            "c": ['Dip-a-Pet', 'Mommy, What Will I Look Like?', 'Dr. Fünke’s 100% Natural Good-Time Family Band Solution', 'You’re Hooked! Vanity Prosthetic Hooks'],
            "answer": 3
        },
             // question 45
        {
            "q": "Buster dabbled in all of the following areas of academia EXCEPT:?",
            "c": ['Native American tribal ceremonies', 'Cartography', 'Eighteenth-century agrarian business', 'Zoology'],
            "answer": 3
        },
             // question 46
        {
            "q": "What is the name of the bodyguard/assistant in charge of carrying around “Uncle Jack” Dorso?",
            "c": ['Grimley', 'Mongo', 'Dragon', 'Bullet'],
            "answer": 2
        },
             // question 47
        {
            "q": "Who of the following did not ever guest-star?",
            "c": ['Jason Alexander', 'Jane Lynch', 'Rob Corddry', 'Richard Belzer'],
            "answer": 0
        },
             // question 48
        {
            "q": "Who else never guest-starred?",
            "c": ['Thomas Jane', 'Jamie Kennedy', 'Dana Carvey', 'Frankie Muniz'],
            "answer": 2
        },
             // question 49
        {
            "q": "What is Buster’s actual first name?",
            "c": ['Brain', 'Bryan', 'Byron', 'Busterson'],
            "answer": 2
        },
             // question 50
        {
            "q": "What dangerously hot product does George market on Mexican TV and results in numerous Bluths getting burned?",
            "c": ['The ChiChi Bang', 'The Cornroller', 'The Cornholer', 'The Cornballer'],
            "answer": 3
        },
    ];


    function postQuestion(n) {

        if (currentQuestionIndex < questions.length) {
            $('#question').remove();
            $('.pickAnswer').remove();
            countDown();
            $('#questionContainer').append("<div id='question'>" + questions[n].q + "</div>");
            for (var i = 0; i < questions[n].c.length; i++) {
                var newDiv = $("<div>");
                newDiv.addClass("pickAnswer").attr("indexnum", i).text(questions[n].c[i]);
                $('#choices').append(newDiv);
            }

        } else {
            // Conditional resets/loops the game
            resetGame(); 
        }

        $(".pickAnswer").on("click", function() {
            // User's choice is stored as a string
            var userChoice = $(this).attr('indexnum'); 
            userChoice = parseInt(userChoice);

            // Conditional to check whether user is correct or not; tallies accordingly
            if (userChoice === questions[currentQuestionIndex].answer) {
                correctCounter++;
                currentQuestionIndex++
                randomCongrats();
            } else {
                incorrectCounter++;
                currentQuestionIndex++;
            }
            postQuestion(currentQuestionIndex);
        })
    }

    function startTrivia() {
        $('#messageSection').hide();
        $('#gameMessage').empty()
        $('#questionContainer').show();
        $('#choices').show();
        $("#timer").show();
        correctCounter = 0;
        incorrectCounter = 0;
        unansweredCounter = 0;
        currentQuestionIndex = 0;

        postQuestion(currentQuestionIndex);
    }

    function resetGame() {
        $('#messageSection').show();
        $('#questionContainer').hide();
        $('#choices').hide();
        $('#timer').hide()

        $('#gameMessage').append("<h2>Results</h2>");
        $('#gameMessage').append("<h4>Correct: " + correctCounter + "</h4>");
        $('#gameMessage').append("<h4>Incorrect: " + incorrectCounter + "</h4>");
        $('#gameMessage').append("<h4>Unanswered: " + unansweredCounter + "</h4>");

        // Depending on user's score, a different image and text is displayed
        if(correctCounter>=40){
            $('#gameMessage').append('<img id="imgFinal" src="./assets/images/michael.jpg"/>');
            $('#gameMessage').append("<h5>Wow, nice work! Such a high score means you're Michael, the smartest of the Bluths</h4>");
        } else if (correctCounter>=30){
            $('#gameMessage').append('<img id="imgFinal" src="./assets/images/george-michael.jpg"/>');
            $('#gameMessage').append("<h5>Not bad! That score means you're George Michael, one of the goofier Bluths</h4>");
        } else if (correctCounter>=20){
            $('#gameMessage').append('<img id="imgFinal" src="./assets/images/steve-holt.png"/>');
            $('#gameMessage').append("<h5>Hm, you could probably do better, huh? You're Steve Holt (STEVE HOLT!) — not the smartest tool in the toolshed, but my, what charisma!</h4>");
        } else {
            $('#gameMessage').append('<img id="imgFinal" src="./assets/images/gob.jpg"/>');
            $('#gameMessage').append("<h5>That's a really low score. You're GOB, Lucille's least favorite child.</h4>");
        }
        
         setTimeout(startTrivia, 1000 * 15);
    }

    $("#startButton").on("click", function() {
        $("#buttonRow").hide();
        $("#startImg").remove();
        $("#timer").append("<span id='timerMinutes'>00</span>:<span id='timerSeconds'>00</span>");
        $("#questionSpace").show();

        startTrivia();
    })