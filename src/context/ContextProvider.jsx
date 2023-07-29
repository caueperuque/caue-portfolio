import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function ContextProvider({ children }) {
  const [submitForm, setSubmitForm] = useState(false);

  const contextValue = useMemo(() => ({
    submitForm,
    setSubmitForm,
  }), [submitForm]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
