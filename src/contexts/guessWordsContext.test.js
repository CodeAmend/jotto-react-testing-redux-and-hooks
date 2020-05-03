import React from 'react';
import { shallow, mount } from 'enzyme';

import guessedWordsContext from './guessedWordsContext';


const FunctionalComponent = () => {
  guessedWordsContext.useGuessedWords();
  return <div />
}

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('Please use guessedWordsContext within GuessedWordsProvider');
});

test('useSuccess does not throw error when wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <guessedWordsContext.GuessedWordsProvider value={[]}>
        <FunctionalComponent />
      </guessedWordsContext.GuessedWordsProvider>
    )
  }).not.toThrow();
});
