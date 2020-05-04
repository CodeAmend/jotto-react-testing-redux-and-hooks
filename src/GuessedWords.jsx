import React from 'react';
import languageContext from './contexts/languageContext';
import stringModule from './helpers/strings';
import guessedWordsContext from  './contexts/guessedWordsContext';


const GuessedWords = () => {
  let contents;
  const language = React.useContext(languageContext);
  const [guessedWords] = guessedWordsContext.useGuessedWords();

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
        <h3>
          {stringModule.getStringByLanguage(language, 'guessedWords')}
        </h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{stringModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
              <th>{stringModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
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

export default GuessedWords;
