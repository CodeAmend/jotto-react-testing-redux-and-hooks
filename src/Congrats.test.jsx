import React from 'react';
import { mount } from 'enzyme';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import { findByTestAttr } from './test/testUtils';

import Congrats from './Congrats';


/**
 * Factory function to create ShallowWrapper for the Congrats component
 * @param {Object} props - Component props
 * @return {ShallowWrapper}
 */
const setup = ({ success, language }) => {
  success = success || false;
  language = language || 'en';
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
}

describe('languagPicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
    
  });

  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe('🎯🎉');
  });
});

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
