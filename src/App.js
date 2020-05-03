import React from 'react';
import hookActions from './actions/hookActions';

import Input from  './Input';


/**
 * Reducer to update state, called by dispatch
 *
 * @name reducer
 * @function
 * @param {object} state existing state
 * @param {object} action contains 'type' and 'payload' properties
 * @returns {object} new state
 */
export function reducer(state, action) {
  switch(action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.payload}`)
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => dispatch({
    type: 'setSecretWord',
    payload: secretWord,
  });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if(!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-boarder" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.getSecretWord} />
    </div>
  );
}
export default App;
