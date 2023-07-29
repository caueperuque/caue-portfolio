import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithProvider from './helpers/renderWithProvider';
import { Home } from '../pages';

describe('Home', () => {
  it('Looking for caue text in the home', async () => {
    await act(async () => {
      renderWithProvider(<Home />);
    });

    expect(await screen.getByText(/cauê/i)).toBeInTheDocument();
  });
});
