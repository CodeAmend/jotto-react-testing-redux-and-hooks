import React from 'react';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';

import stringModule from './helpers/strings';


/**
 * Functional RC for congrats message
 *
 * @returns {JSX.Element} render or null
 */
const Congrats = () => {
  const language = React.useContext(languageContext);
  const [success] = successContext.useSuccess();

  if (success) {
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

export default Congrats;
