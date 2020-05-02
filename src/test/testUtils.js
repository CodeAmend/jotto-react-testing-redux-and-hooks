import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../reducers'


/**
 * Returns node(s) with the given data-test attribute.
 *
 * @param {ShallowWrapper} - Enzyme shallow wraper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Factory function to check proptypes of component
 * @param component
 * @param conformingProps - { object of props name }
 * @returns {CheckError}
 */
export const checkProps = (component, conformingProps) => {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
}
