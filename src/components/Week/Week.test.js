import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Week from './Week'

describe('Week tests', () => {
  test('Week exists', () => {
    render(<Week firstDay={1} month={1} year={2000}/>);
    expect(screen.getByTestId('week')).toBeInTheDocument();
    expect(screen.getAllByTestId('dayCard')).toHaveLength(7);
  });
});