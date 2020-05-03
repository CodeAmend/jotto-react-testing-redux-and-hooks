import React from 'react';
import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';

import LanguagePicker from './LanguagePicker';

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
    case "setLanguage":
      return { ...state, language: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.payload}`)
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null, language: 'en' }
  );

  const setSecretWord = secretWord => dispatch({
    type: 'setSecretWord',
    payload: secretWord,
  });

  const setLanguage = lang => dispatch({
    type: 'setLanguage',
    payload: lang,
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
  } else {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <languageContext.Provider value={state.language}>
          <LanguagePicker setLanguage={setLanguage} />
          <Input secretWord={state.getSecretWord} />
        </languageContext.Provider>
      </div>
    );
  }

}
export default App;
