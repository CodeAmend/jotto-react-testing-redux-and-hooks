const languageStrings = {
  en: {
    congrats: 'Congrats! You guessed it!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessWords: 'Guessed Words',
    guessColumnHeader: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
   congrats: '🎯🎉',
   submit: '🚀',
   guessPrompt: '🤔🤫🔤',
   guessInputPlaceholder: '⌨️🤔',
   guessedWords: '🤷‍🔤',
   guessColumnHeader: '🤷‍',
   matchingLettersColumnHeader: '✅',
  }
}

function getStringByLanguage(languageCode, stringKey, strings=languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)
    return strings['en'][stringKey];
  }
  return strings[languageCode][stringKey]
}

export default {
  getStringByLanguage,
}
