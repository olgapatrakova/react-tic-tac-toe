import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    };
  };
  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [itsXTurn, setXTurn] = useState(true);

  const takeTurns = () => {
    setXTurn(!itsXTurn);
  };

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    const squaresList = [];
    for (let row of squares) {
      const new_row = [];
      for (let square of row) {
        // Update the value of a square if its id is the same as the passed id from the 'Square' component
        if (square.id === id) {
          let updatedSquare = square;
          updatedSquare.value = itsXTurn ? PLAYER_1 : PLAYER_2;
          new_row.push(updatedSquare);
        } else {
          new_row.push(square)
        };
      };
      squaresList.push(new_row);
    };
    setSquares(squaresList);
    takeTurns();
  };

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} /> {/* Squares and function are passed as props to Board */}
      </main>
    </div>
  );
}

export default App;
