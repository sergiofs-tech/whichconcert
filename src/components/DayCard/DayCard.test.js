import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import DayCard from './DayCard'

describe('DayCard tests', () => {
  test('DayCard exists', () => {
    render(<DayCard number={20}/>);
    expect(screen.getByTestId('dayCard')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });
});