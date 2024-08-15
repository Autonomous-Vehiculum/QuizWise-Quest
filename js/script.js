const STORE = {
    questions: {
        technology: [
          {
            question: "What technology do self-driving cars primarily use to detect objects around them?",
            code: ``,
            answers: [
              "Sonar",
              "Radar",
              "LiDAR",
              "Infrared"
            ],
            correctAnswer: "LiDAR"
          },
          {
            question: "Which company is a leading developer of autonomous vehicle technology?",
            code: ``,
            answers: [
              "Google",
              "Ford",
              "Tesla",
              "Apple"
            ],
            correctAnswer: "Tesla"
          },
          {
            question: "What is the main function of the artificial intelligence in self-driving cars?",
            code: ``,
            answers: [
              "To entertain passengers",
              "To navigate and make driving decisions",
              "To monitor fuel levels",
              "To control the air conditioning system"
            ],
            correctAnswer: "To navigate and make driving decisions"
          },
          {
            question: "Which sensor is used to determine the precise position of a self-driving car on a map?",
            code: ``,
            answers: [
              "Ultrasonic sensors",
              "GPS",
              "Cameras",
              "Temperature sensors"
            ],
            correctAnswer: "GPS"
          },
          {
            question: "What is the primary benefit of Vehicle-to-Everything (V2X) communication in autonomous vehicles?",
            code: ``,
            answers: [
              "Improved entertainment options",
              "Enhanced safety and traffic management",
              "Faster internet connectivity",
              "Reduced manufacturing costs"
            ],
            correctAnswer: "Enhanced safety and traffic management"
          }
        ],
        safety: [
          {
            question: "Identify the correct action the self-driving car should take when approaching the intersection shown in the image.(Richmond St. and Dundas St. Intersection in London, Ontario)",
            code: `<img src="../img/route-ques-img.png"/>`,
            answers: [
                "Turn left immediately",
                "Continue straight through the intersection",
                "Yield to pedestrians and then proceed",
                "Make a right turn"
            ],
            correctAnswer: "Yield to pedestrians and then proceed"
           },
          {
            question: "How do self-driving cars enhance road safety?",
            code: ``,
            answers: [
              "By eliminating human error",
              "By reducing fuel consumption",
              "By increasing the speed limits",
              "By improving road infrastructure"
            ],
            correctAnswer: "By eliminating human error"
          },
          {
            question: "Which organization sets safety standards for autonomous vehicles in the United States?",
            code: ``,
            answers: [
              "FDA",
              "NHTSA",
              "FAA",
              "FCC"
            ],
            correctAnswer: "NHTSA"
          },
          {
            question: "What safety feature allows self-driving cars to take control during emergencies?",
            code: ``,
            answers: [
              "Automatic braking system",
              "Voice control",
              "Automatic door locks",
              "Automatic climate control"
            ],
            correctAnswer: "Automatic braking system"
          },
          {
            question: "Which level of autonomous driving requires no human intervention at all?",
            code: ``,
            answers: [
              "Level 2",
              "Level 3",
              "Level 4",
              "Level 5"
            ],
            correctAnswer: "Level 5"
          },
          {
            question: "What is a common ethical dilemma faced by self-driving cars?",
            code: ``,
            answers: [
              "Choosing the fastest route",
              "Balancing battery usage",
              "Decision-making in potential accident scenarios",
              "Selecting entertainment options for passengers"
            ],
            correctAnswer: "Decision-making in potential accident scenarios"
          }
        ],
        legal: [
          {
            question: "Which state was the first to pass legislation allowing self-driving cars on public roads?",
            code: ``,
            answers: [
              "California",
              "Texas",
              "Nevada",
              "New York"
            ],
            correctAnswer: "Nevada"
          },
          {
            question: "What is one of the major legal challenges for self-driving cars?",
            code: ``,
            answers: [
              "Software development",
              "High manufacturing costs",
              "Determining liability in case of an accident",
              "Battery life management"
            ],
            correctAnswer: "Determining liability in case of an accident"
          },
          {
            question: "Which document is often required for testing self-driving cars on public roads?",
            code: ``,
            answers: [
              "Environmental impact report",
              "Financial statement",
              "Safety assessment report",
              "Marketing plan"
            ],
            correctAnswer: "Safety assessment report"
          },
          {
            question: "Who is primarily responsible for regulating self-driving cars in the European Union?",
            code: ``,
            answers: [
              "European Parliament",
              "European Central Bank",
              "European Commission",
              "European Medicines Agency"
            ],
            correctAnswer: "European Commission"
          },
          {
            question: "What type of insurance is essential for self-driving cars?",
            code: ``,
            answers: [
              "Life insurance",
              "Home insurance",
              "Cybersecurity insurance",
              "Liability insurance"
            ],
            correctAnswer: "Liability insurance"
          }
        ],
        futureImpact: [
          {
            question: "How are self-driving cars expected to impact urban planning?",
            code: ``,
            answers: [
              "Increase in parking spaces",
              "Decrease in traffic congestion",
              "Increase in gas stations",
              "Decrease in public transportation use"
            ],
            correctAnswer: "Decrease in traffic congestion"
          },
          {
            question: "What is a potential benefit of self-driving cars for the environment?",
            code: ``,
            answers: [
              "Higher emissions",
              "Increased fuel consumption",
              "Reduction in carbon emissions",
              "Increased deforestation"
            ],
            correctAnswer: "Reduction in carbon emissions"
          },
          {
            question: "How might self-driving cars change the job market?",
            code: ``,
            answers: [
              "Increase in driving jobs",
              "Decrease in tech-related jobs",
              "Creation of new tech and maintenance jobs",
              "Reduction in software development roles"
            ],
            correctAnswer: "Creation of new tech and maintenance jobs"
          },
          {
            question: "Which industry is likely to see significant changes due to self-driving cars?",
            code: ``,
            answers: [
              "Fashion industry",
              "Agriculture industry",
              "Automobile insurance industry",
              "Textile industry"
            ],
            correctAnswer: "Automobile insurance industry"
          },
          {
            question: "What is a predicted social benefit of self-driving cars?",
            code: ``,
            answers: [
              "Increased travel costs",
              "Greater accessibility for the elderly and disabled",
              "Reduced availability of transportation",
              "Increased need for driving licenses"
            ],
            correctAnswer: "Greater accessibility for the elderly and disabled"
          }
        ]
      }
 
};


// Make the quiz. Create a model for our app's state
function makeQuiz(){
	// Creating an object to store the app's state when beginning the quiz
	return {
		// Gathering a random question out of the available questions for each category
		questions: helpers.getRandomQuestions(STORE),
		// Boolean for if the quiz is in progress or not
		midQuiz: false,
		// Array of correct/incorrect answers to use for our progress bar
		progress: {
			progressBar: [],
			incorrectCategories: []
		},
		// Boolean to determine if the end state should display
		completed: false,
		// Monitoring which question we are currently on
		currentQuestion: 0,
		// Keeps track of total correct answers
		correctAnswers: 0,
		// Keeps current selected answer
		currentAnswer: "",
		// Keeps track of % completed
		percCorrect: 0
	}
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState){

	// This is the completed state of of a quiz
	if(appState.completed){
		
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){

				// Display results of the quiz
				$showResults(appState);
				$('.results-wrapper').hide().removeClass('hide');
				$('.question-answer-wrapper, .results-wrapper').fadeIn(500);
	    });

	// This is if the app is just starting
	} else if(appState.midQuiz === false){

		// Set a flag that the app has begun
		appState.midQuiz = true;
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
			.done(function(){
				// Remove any progress from a previous quiz (if any);
				helpers.updateProgressBar(appState);
				$('.progress-count').html('1 / 4');
				$('.progress-perc').html('');
				// Kill previous results
				$('.failures').remove();
				// Lots to do... mostly just setting up a new environment for a new quiz
				$updateQuestion(appState);
				$('progress-bar').empty();
				$('progress-fill').html('Progress: <span class="progress-count">1 / 4</span><span class="progress-perc"></span>');
				$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
				$('.submit-btn, .progress, .progress-bar').removeClass('hide');
				$('.progress, .progress-bar').hide();
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
				if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
	    });

	// This is if the app is in the middle of execution
	} else if(appState.midQuiz){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){
				$updateQuestion(appState);
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
	    });
	}
}

// Work in progress...
function $showResults(appState){
	if(appState.correctAnswers === 4){
		let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
	} else {
		$('.answer-btn').remove();
		let endMsg = `You got ${appState.percCorrect}% correct!`
		let endFeedback = ``;
		if(appState.progress.incorrectCategories.length === 0){
			endFeedback = `You aced it! Good job!`;
		} else {
			endFeedback = `You may want to study up on the following categories:`;
		}
		
		$('.quiz-end-score').html(endMsg);
		let $failList = $('<ul class="failures"></ul>');
		appState.progress.incorrectCategories.map((cat => {
			$failList.append("<li class='category'>" + cat + "</li>");
		}));
		$('.quiz-end-feedback-p').html(endFeedback);
		$('.quiz-end-categories').append($failList);
		$('.results-wrapper').removeClass('hide').css('display', 'flex');
		$('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
	}

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState){
	$('.answer-btn').remove();

	// Update the question and code text with the current question
	$('.question').html(appState.questions[appState.currentQuestion].question);

	// This is a hack to hide/show the code portion
	// Only 1/3 of the questions contain code so we hide it if they aren't present
	if(appState.questions[appState.currentQuestion].code == ``){
		$('.code').addClass('hide');
	} else {
		$('.code').removeClass('hide');
        // console.log(appState.questions[appState.currentQuestion]);
		$('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
	}
	
	// Change continue back to submit
	$('.continue-btn')
		.val("Submit")
		.removeClass('continue-btn')
		.addClass('submit-btn')
		.prop('disabled', true);

	// Add in available answers for the question
	let $answers = [];

	// Adding the answers to a temporary array
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){

		// Add current question answers to an array
		let $answer = $('<button class="answer-btn" type="button"></button>');
		$answer.html(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}

	// Shuffle the answers
	helpers.shuffleAnswers($answers)

	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState){

	// This will be returned true or false based on their answer
	let correct;

	// Add styles to the answers to show if their answer was correct or not
	$('.answer-btn').each(function () {
		if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			// If answer is correct and selected...
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
				appState.questions[appState.currentQuestion];
			}

		// Handle correct answer if selected answer is incorrect
		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail dim-answer');
			correct = "fail";
			appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

		// Dim the other answers to make the correct one more prevalent
		} else {
			$(this).addClass('dim-answer');
		}
	});

	// Add a progress bar indicator to our appState object
	appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
	
	// Update our percent correct (parse a float and set it to a fixed percentage)
	appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

	// Update our current question VS total quiz length
	$('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

	// Update our current correct percentage
	$('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

	// Change submit back to continue
	$('.submit-btn')
		.val("Continue")
		.removeClass('submit-btn')
		.addClass('continue-btn')

	// Disable selecting answers
	$('.answer-btn').prop("disabled", true);

	// Update our progress-bar DOM
	helpers.updateProgressBar(appState);

	// Continue to next question
	appState.currentQuestion++;

	// Verify if we're done or not
	if(appState.currentQuestion === appState.questions.length){
		appState.completed = true;
	}
	
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
		}
	}, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
	// Pick a random question from the available ones
	pickRandomQ: function(obj,section){
		return Math.floor(Math.random() * obj.questions[section].length);		
	},
	// Gather a random question from every category
	getRandomQuestions: function(obj){
		let questions = [];
		let categories = Object.keys(obj.questions);
		categories.forEach((cat) => {
			let randomQ = this.pickRandomQ(obj,cat);
			let question = obj.questions[cat][randomQ];
			question.category = cat;
			questions.push(question);
		});
		return questions;
	},
	// Shuffle the answers so they don't appear in the same order
	shuffleAnswers: function(arr){
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	},
	// Update progress bar DOM element
	updateProgressBar: function(appState){
		$('.progress-bar').empty();
		appState.progress.progressBar.forEach((progInd => {
			$('.progress-bar').append(progInd);
		}))
	}
}

// Lets start the show
$(function(){

	// Kill any form refresh
	$('.answer-wrapper').on('submit', function(e){
		e.preventDefault();
	});

	// Storage for quiz app state
	let quizData;

	// Start quiz
	$('.start-quiz, .retry-btn').on('click', function(){
		quizData = makeQuiz();
		$fade(quizData);
	});

	// Select an answer
	$('.question-answer-wrapper').on('click', '.answer-btn', function(){
		selectAnswer($(this));
	})

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.submit-btn', function(e){
		submitAnswer(quizData);
	});

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.continue-btn', function(){
		$fade(quizData);
	});

	// Easter egg to chastize the user
	$('.quit-quiz').on('click', function(){
		killQuiz();
	})
})
