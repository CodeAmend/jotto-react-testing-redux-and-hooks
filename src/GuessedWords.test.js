import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';


const setup = () => {
  return shallow(<GuessedWords />);
}

test('does not throw warning with expected props', () => {
  setup();
});

