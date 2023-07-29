import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithProvider from './helpers/renderWithProvider';
import { About } from '../pages';

describe('About', () => {
  it('Looking for the image', async () => {
    await act(async () => {
      renderWithProvider(<About />);
    });

    expect(await screen.getByRole('img', { name: /foto cauê peruque/i })).toBeInTheDocument();
  });

  it('Looking for the let\'s talk button', async () => {
    await act(async () => {
      renderWithProvider(<About />);
    });

    expect(await screen.getByRole('link', { name: /vamos conversar/i })).toBeInTheDocument();
  });
});
