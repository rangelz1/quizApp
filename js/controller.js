function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

//this function checks the index of the current question
Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

//this function checks if the quiz has ended
Quiz.prototype.isEnded = funtion() {
	return this.questions.length === this.questionIndex;
}

//this function checks if the player's answer matches the correct quiz answer
Quiz.prototype.guess = function(answer) {
	this.questionIndex++;

	if(this.getQuestionIndex() .correctAnswer(answer)) {
		this.score++;
	}
}