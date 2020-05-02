export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
}

/**
 * correctGuess
 *
 * @function correctGuess
 * @returns {Object} Action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS }
}
