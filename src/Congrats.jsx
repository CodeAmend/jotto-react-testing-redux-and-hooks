import React from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';

import stringModule from './helpers/strings';


/**
 * Functional RC for congrats message
 *
 * @returns {JSX.Element} render or null
 */
const Congrats = (props) => {
  const language = React.useContext(languageContext);
  if (props.success) {
    return (
      <div className="alert alert-success" data-test="component-congrats">
        <span data-test="congrats-message">
          {stringModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats">

      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;
