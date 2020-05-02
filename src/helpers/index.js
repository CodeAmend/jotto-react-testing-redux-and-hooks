export function getLetterMatchCount(guessedWords, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWords.split(''));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}
