import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';


const setup = () => {
  return shallow(<Input />);
}

test('render', () => {
  setup();
});
