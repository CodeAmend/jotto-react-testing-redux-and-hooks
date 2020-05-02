import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from './test/testUtils'

import App, { UnconnectedApp } from './App';


const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store}/>)
  return wrapper.dive().dive();
}

describe('redux properties', () => {
  test('success is false', () => {
    const success = false;
    const wrapper = setup({ success });
    expect(wrapper.instance().props.success).toBe(false);
  });

  test('has access to secretWord state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    expect(wrapper.instance().props.secretWord).toBe(secretWord)
  });

  test('has access to guessedWord state', () => {
    const guessedWords = [ { guessedWord: 'train', letterMatchCount: 3 } ];
    const wrapper = setup({ guessedWords });
    expect(wrapper.instance().props.guessedWords).toEqual(guessedWords);
  });

  test('getSecretWord action creator is a function on the props', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.getSecretWord).toBeInstanceOf(Function);
  });
})

test('getSecretWord runs on App mount', () => {
  const getSecretWordMock = jest.fn();

  // Simulate dispatches to UnconnectedApp
  const wrapper = shallow(<UnconnectedApp getSecretWord={getSecretWordMock} />)

  // Run lifecycle methods
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
