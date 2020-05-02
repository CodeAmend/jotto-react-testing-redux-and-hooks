import React from 'react';


/**
 * Functional RC for congrats message
 *
 * @returns {JSX.Element} render or null
 */
export default (props) => {
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
