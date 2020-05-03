import React, {useState} from "react"
import PropTypes from 'prop-types';


function LanguagePicker({ setLanguage }){
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  const languageIcons = languages.map(lang => (
    <span
      key={lang.code}
      data-test="language-icon"
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol}
    </span>
  ))

  return(
    <div data-test="component-language-picker">
      {languageIcons}
    </div>
  );
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
}

export default LanguagePicker;
