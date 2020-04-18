import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  console.log("generateSquareComponents", squares)
  return squares.map((row) => {
    console.log('row', row);
    return row.map((cell) => {
      return (
        <Square
          key={cell.id}
          value={cell.value}
          id={cell.id}
          onClickCallback={onClickCallback}
        />
      );
    });
  });
};

const Board = (props) => {
  const squareList = generateSquareComponents(props.squares, props.onSquareClick);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
    ),
  onSquareClick: PropTypes.func.isRequired,
};

export default Board;
