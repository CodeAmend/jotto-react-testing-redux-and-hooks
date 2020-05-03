import React from 'react';

export const successContext = React.createContext()


/**
 * useSuccess
 *
 * @name useSuccess
 * @function
 * @returns {array} 
 */
function useSuccess() {
  const context = React.useContext(successContext);

  if (!context) {
    throw new Error('useSuccess must be used within a SuccessProvider')
  }


  return context;
}

/**
 * SuccessProider
 *
 * @name SucessProvider
 * @function
 * @param {object} prop prop to pass through from declated component
 * @returns {JSX.Element} Provider component
 */
function SuccessProvider(props) {
  const [success, setSuccess] = React.useState(false);

  const value = React.useMemo(() => [success, setSuccess], [success]);

  return <successContext.Provider value={value} {...props} />
}

export default { useSuccess, SuccessProvider };
