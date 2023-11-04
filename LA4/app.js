angular.module('ticTacToeApp', []);
angular.module('ticTacToeApp')
.component('ticTacToe', {
     template:
     <article class="container well">
     <div ng-repeat="row in $ctrl.board">
     <button class="btn-lg"
     ng-repeat="cell in row" ng-class="cell.value"
     ng-disabled="$ctrl.isTaken(cell) || $ctrl.winner" ng-click="$ctrl.move(cell)"
     >{{ cell.value }}
     </button>
</div>
<p>
<span ng-hide="$ctrl.winner || $ctrl.cat">Current Player: {{ $ctrl.currentPlayer }}</span>
<span ng-show="$ctrl.winner">Player {{ $ctrl.currentPlayer }} has won!</span>
<span ng-show="$ctrl.cat">Cat</span>
</p>
<button class="btn btn-primary btn-large" ng-click="$ctrl.reset()">New Game</button>
</article>,
controller: function TicTacToeCtrl() { console.log('ticTacToeCtrl is alive!'); var emptyCell = '?';
 
this.board = [
[ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ], [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ], [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ]
];
this.clearBoard = function() { this.board.forEach( (row) => { row.forEach( (cell) => {
cell.value = emptyCell;
});
});
};
this.reset = function() { this.currentPlayer = 'X'; this.winner = false; this.cat = false; this.clearBoard();
};

this.isTaken = function(cell) { return cell.value !== emptyCell;
};

function checkForMatch(cell1, cell2, cell3) { return cell1.value === cell2.value &&
cell1.value === cell3.value && cell1.value !== emptyCell;
}

this.isBoardFull = function() {
for (var row=0; row<=2; row++) { for (var col=0; col<=2; col++) {
 
if (this.board[row][col].value === emptyCell) { return false;
}
}
}
return true;
};

this.checkForEndOfGame = function() {
var rowMatch = checkForMatch(this.board[0][0], this.board[0][1], this.board[0][2]) || checkForMatch(this.board[1][0], this.board[1][1], this.board[1][2]) || checkForMatch(this.board[2][0], this.board[2][1], this.board[2][2]);
var colMatch = checkForMatch(this.board[0][0], this.board[1][0], this.board[2][0]) || checkForMatch(this.board[0][1], this.board[1][1], this.board[2][1]) || checkForMatch(this.board[0][2], this.board[1][2], this.board[2][2]);
var diagMatch = checkForMatch(this.board[0][0], this.board[1][1], this.board[2][2]) || checkForMatch(this.board[0][2], this.board[1][1], this.board[2][0]);
this.winner = rowMatch || colMatch || diagMatch; this.cat = !this.winner && this.isBoardFull(); return this.winner || this.cat;
}
this.move = function(cell) { cell.value = this.currentPlayer;
if (this.checkForEndOfGame() === false) { this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
}
};

this.reset();
}
});

