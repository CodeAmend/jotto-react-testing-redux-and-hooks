import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


const setup = () => {
  return shallow(<App />);
}

it('renders without crashing', () => {
  setup();
});
