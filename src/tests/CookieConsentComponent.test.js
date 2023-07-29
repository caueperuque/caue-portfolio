import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithProvider from './helpers/renderWithProvider';
import { CookieConsentComponent } from '../components';

describe('CookieConsentComponent', () => {
  it('Looking for the accept button', async () => {
    await act(async () => {
      renderWithProvider(<CookieConsentComponent />);
    });

    expect(await screen.getByRole('button', { name: /accept cookies/i })).toBeInTheDocument();
  });
});
