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
  let wrapper;

  describe('word has not been guessed', () => {
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)

    })

    test('render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)

    })

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('update state', () => {

})