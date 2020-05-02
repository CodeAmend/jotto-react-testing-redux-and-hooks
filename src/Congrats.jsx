import React from 'react';
import PropTypes from 'prop-types';


/**
 * Functional RC for congrats message
 *
 * @returns {JSX.Element} render or null
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats">

      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;
