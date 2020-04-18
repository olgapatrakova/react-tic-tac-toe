import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const onClickCallback = () => { // How we switch from X to O
  //   const updatedSquare = {
  //     value: !props.value,
  //     id: props.id,
  //     onClickCallback: onClickCallback,
  //   }

  //   // Send the new updated square back to App.js
  //   // call the function passed from `App`
    props.onClickCallback(props.id);
  };
 


  return <button
    className="square"
    onClick={onClickCallback}
  >
    {props.value} {/* Text of the button */}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
