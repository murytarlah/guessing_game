var randomNumber = Math.floor(Math.random() * 100) + 1;
var body = document.getElementsByTagName('body');
var resultBody = document.querySelectorAll('.result-body p');
var resultBody2 = document.querySelector('.body');
var trialPrevious = document.querySelector('.trial-previous');
var trialResult = document.querySelector('.trial-result');
var trialCheck = document.querySelector('.trial-check');

var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');
var hint = document.querySelector('#hint');
var hintDisplay = document.querySelector('#displayer');
var hintRemove = document.querySelector('#btn')
var modal = document.querySelector('#modal')
var guessCount = 1;
var resetButton;
function resetGame() {
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;

  // var resultBody = document.querySelectorAll('.result-body p');
    for (var i = 0 ; i < resultBody.length ; i++) {
    resultBody[i].textContent = '';
    resultBody[i].style.backgroundColor = 'transparent';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = ' ';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

}
function setGameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.backgroundColor = 'transparent';
    resetButton.style.color = 'black';
    resetButton.style.fontWeight = 'bold';
    resetButton.style.border = '2px  black';
    resetButton.style.borderStyle = 'solid';
    // document.body.appendChild(resetButton);
    if (guessSubmit && guessField) {
        resultBody2.insertAdjacentElement('beforeend', resetButton);
    }

    resetButton.addEventListener('click', resetGame);
}
function checkGuess() {
    var userGuess = Number(guessField.value);
	if (guessCount === 1) {
		trialPrevious.textContent = 'Previous Guesses: ';
	}
	trialPrevious.textContent += userGuess + ' '+' ';

	if (userGuess === randomNumber) {
		trialResult.textContent = 'Congratulation you got the answer';
		trialResult.style.backgroundColor = 'Green';
		trialResult.style.margin = '5px auto';
		trialResult.style.padding = '5px';
		trialCheck.textContent = ' ';
		setGameOver();
	} else if (guessCount === 10) {
		trialResult.textContent = '!!! GAME OVER !!!';
		setGameOver();
	} else if (userGuess < randomNumber) {
		trialResult.textContent = 'Wrong!';
		trialResult.style.backgroundColor = 'crimson';
		trialResult.style.margin = '5px auto;';
		trialResult.style.padding = '5px';
		trialResult.style.borderRadius = '20px';
		// if(userGuess < randomNumber) {
		trialCheck.textContent = 'Guess is too low!!!';
	} else if (userGuess > randomNumber) {
		trialResult.textContent = 'Wrong!';
		trialResult.style.backgroundColor = 'crimson';
		trialResult.style.margin = '5px auto';
		trialResult.style.padding = '5px';
		trialResult.style.borderRadius = '20px';
		trialCheck.textContent = 'Guess is too High!!!';
	}
    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}
//var displayChecker = hint.style.display;
//function displayChanger () {
//    hint.classList.toggle('show');
//}
guessSubmit.addEventListener('click', checkGuess);
hintDisplay.addEventListener('click', function  (){
        modal.style.display = 'block';
        modal.style.zIndex = '1';
        modal.style.position = 'fixed'
        modal.style.top = '0';
        modal.style.left = '0'
        modal.style.width = '100%'
        modal.style.height = '100%'
        modal.style.background = "rgba(0,0,0,0.5)"
    }
);

hintRemove.addEventListener('click', function  (){
        modal.style.display = "none";
    }
);
