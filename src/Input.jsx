import React from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import stringModule from './helpers/strings';


const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [currentGuess, setCurrentGuess] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault();

    if (currentGuess === secretWord) {
      setSuccess(true)
    }

    setCurrentGuess('');
    //
  }

  if (success) return null;

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder={stringModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          onChange={e => setCurrentGuess(e.target.value)}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={submitGuess}
        >
          {stringModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;
