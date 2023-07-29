import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../../context/ContextProvider';

export default function renderWithProvider(children) {
  return (
    render(
      <Provider>
        { children }
      </Provider>,
    )
  );
}
