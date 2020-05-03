import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './test/testUtils';

import Input from './Input';



const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />);
}

test('Input renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
})

describe('state controlled input field', () => {

  let mockSetCurrentGuess = jest.fn();
  beforeEach(() => {
    mockSetCurrentGuess.mockClear(); 
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
  })

  test('state updaes with value of input box upon change', () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' }}

    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  })

  test('submit preventDefault and clear guessedWord', () => {
    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    const mockPreventDefault = jest.fn();
    const mockEvent = { preventDefault: mockPreventDefault };
    submitButton.simulate('click', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    expect(mockPreventDefault).toHaveBeenCalled();
  })
});
