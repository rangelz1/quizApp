//this function populates the question into the quiz
function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml = "<h2 id='score'> Your score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

//This variables recive the questions from 
var questions = [
	new Question("What is one advantage of using JavaScript?", 
		["It requires the terminal to be connected to the server at all times.", 
		"It can only be used with the latest browser versions.",
		"It can be used on both front-end and server-side technologies.",
		"It can only be used as an object oriented programming language."],"It can be used on both front-end and server-side technologies."),
	new Question("What is a disadvantage of using JavaScript?",
	 ["It's not useful for Back-end programming.",
	 "JavaScript’s main weakness is security.",
	 "It's a very strict language.","It can't be used to enhance UI/UX."], "It’s main weakness is security."),
	new Question("What is a RESTful Web Service?", 
		["It's a practice for building web and mobile applications.",
		"It's a practice for slowing down web and mobile applications.",
		"It's a practice for increasing the style of a website.",
		"It stops the transfare of data between server and clent."], "It's a practice for building web and mobile applications."),
	new Question("Which one of these is not a JavaScript framework?", ["Angular","React","Meteor","SASS"], "SASS"),
	new Question("Which one is not a programming paradigms important for JavaScript app developers?",
	 ["Imperative/Procedural programming",
	 "Concatenative Programming.", "OOP (Object-Oriented Programming)", "Functional programming."], "Concatenative Programming.")
];

//this is an object for the quiz controller
var quiz = new Quiz(questions);

populate();