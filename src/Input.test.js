import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from './test/testUtils'
import Input, { UnconnectedInput } from './Input';


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


describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  })
  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('guessWord action creator call', () => {
  let wrapper;
  let guessWordMock;
  const guessWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock
    };

    wrapper = shallow(<UnconnectedInput {...props} />)

    wrapper.setState({ currentGuess: guessWord })

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} })
  })

  test('guessWord is called on submit', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls guessWord with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWord).toBe(guessWordArg);
  });

  test('input box clears after submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
})
