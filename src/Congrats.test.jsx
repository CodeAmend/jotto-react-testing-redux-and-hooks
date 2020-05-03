import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';


/**
 * Factory function to create ShallowWrapper for the Congrats component
 * @param {Object} props - Component props
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Congrats />)
}

test('renders without error', () => {
  setup();
})
