import React from 'react';
import PropTypes from 'prop-types';


const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault();
    setCurrentGuess('');
    // TODO: update guessedWord context
    //
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          onChange={e => setCurrentGuess(e.target.value)}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={submitGuess}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;
