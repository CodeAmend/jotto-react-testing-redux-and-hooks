import React from 'react';
import { mount } from 'enzyme';
import { checkProps, findByTestAttr } from './test/testUtils';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';

import Input from './Input';


const setup = ({ success, language, secretWord }={}) => {
  language = language || 'en';
  secretWord = secretWord || 'party';
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Input secretWord={secretWord} />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
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
})


describe('languageContext', () => {
  test('input placeholder has correct english language', () => {
    const wrapper = setup({ language: 'en' });
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.props().placeholder).toBe('enter guess');
  });
  test('input placeholder has correct emoji language', () => {
    const wrapper = setup({ language: 'emoji' });
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.props().placeholder).toBe('⌨️🤔');
  });

  test('button text has correct english language', () => {
    const wrapper = setup({ language: 'en' });
    const inputBox = findByTestAttr(wrapper, 'submit-button')
    expect(inputBox.text()).toBe('Submit');
  });

  test('button text has correct emoji language', () => {
    const wrapper = setup({ language: 'emoji' });
    const inputBox = findByTestAttr(wrapper, 'submit-button')
    expect(inputBox.text()).toBe('🚀');
  });
});

describe('successContext', () => {
  test('does not render with success=true', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.isEmptyRender()).toEqual(true);
  });
});
