import React from 'react';
import { mount } from 'enzyme';

import App, { reducer } from './App';

import { findByTestAttr } from './test/testUtils';
import hookActions from './actions/hookActions';


const mockGetSecretWord = jest.fn();

const setup = (secretWord) => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord },
      jest.fn(),
    ]);

  React.useReducer = mockUseReducer;

  return mount(<App />);
}

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear();

    wrapper.update();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  })
});

describe("reducer function", () => {
  test("secretWord state updates for action type 'setSecretWord'", () => {
    const oldState = { secretWord: '', lanugage: 'en' };
    const action = { type: 'setSecretWord', payload: 'newSecretWord' };
    const newState = reducer(oldState, action);
    expect(newState).toMatchObject({ secretWord: 'newSecretWord', lanugage: 'en' });
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  })

  test('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(true);
  })

  test('does not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(false);
  })
})

describe('secretWord is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  })

  test('does not renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  })

  test('renders spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(true);
  })
})
