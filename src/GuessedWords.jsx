import React from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';
import stringModule from './helpers/strings';


const GuessedWords = ({ guessedWords }) => {
  const language = React.useContext(languageContext);
  let contents;
  if (!guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">
        {stringModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    )
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>

    )
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired

}

export default GuessedWords;
