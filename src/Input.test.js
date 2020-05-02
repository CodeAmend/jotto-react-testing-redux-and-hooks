import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from './test/testUtils'
import Input from './Input';


const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  return wrapper.dive().dive();
}

describe('render', () => {
  describe('word has not been guessec', () => {
    test('renders component without error', () => {
      const component = setup();

    })
    test('render input box', () => {})
    test('renders submit button', () => {})
  })

  describe('word has been guessed', () => {
    test('renders component without error', () => {})
    test('render input box', () => {})
    test('renders submit button', () => {})
  })
})

describe('update state', () => {

})
