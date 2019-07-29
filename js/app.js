console.log('Hello frontend');

let time, interval;
let grid = document.querySelectorAll('game-board-grid');
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
});

function start() {
	console.log('game starts now');
	clearTimeout(interval);
}
function stop() {
	console.log('game is paused');
	clearTimeout(interval);
}
function reset() {
	console.log('start over');
	clearTimeout(interval);
}

start();
stop();
reset();


time = 15;
document.getElementById('game-clock').style.color = 'chartreuse';

clearInterval(interval);
interval = setInterval(countDown, 1000);

function countDown() {
	time -= 1;
	document.getElementById('game-clock').textContent = time;
	if (time === 10) {
		document.getElementById('game-clock').style.color = 'yellow';
	}
	else if (time === 5) {
		document.getElementById('game-clock').style.color = 'purple';
	}
	else if (time <= 0) {
	//LOSE THE GAME - RAN OUT OF TIME
	loseGame();	

function loseGame() {
	endGame('You Ran Out Of Time');
	document.getElementById('start').textContent = 'Timed-Out. Play Again?'


};

let bucketArray = [];
let bucketOneArray = [];
let bucketTwoArray = [];
let currentPlayer = 0;
let playerProfileOne = 0;
let playerProfileTwo = 0;
let ultimateWin = 3;
function allConditions() {
	gameWinningPossibilities.push([1, 2, 3]);
	gameWinningPossibilities.push([4, 5, 6]);
	gameWinningPossibilities.push([7, 8, 9]);
	gameWinningPossibilities.push([2, 5, 8]);
	gameWinningPossibilities.push([3, 6, 9]);
	gameWinningPossibilities.push([1, 5, 9]);
	gameWinningPossibilities.push([3, 5, 7]);

let emptyGrid = document.querySelectorAll('.game-board-grid');
for (let i = 0; i < emptyGrid.length; i++) {
	emptyGrid[i].addEventListener('click', xAndO);
	console.log(emptyGrid[i]);
}

function winner() {
//loop through the empty grid
	for (let i = 0; i < emptyGrid.length; i++) {
		//if an empty box is checked; game can continue
		if (emptyGrid[i].getAttribute('game-board-grid') === 'true') {
			return false;
		}	
	}
	return true;
}

let xAndO = function(e) {
	if (currentPlayer == 0) {
		this.innerHTML = "X";
		playerProfileOneSelections.push(parseInt(this.id));
		playerProfileOneSelections.sort(function(a, b)){
			return a - b

	}
}
	else {
		this.innerHTML = "O";
		playerProfileTwoSolections.push(parseInt)(this.id);
		playerProfileTwoSolections.sort(function(a, b)) {
			return a - b
	}
}

function endGame() {
	clearInterval(interval);
}


endGame();
}
}
