import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Month from './Month'

describe('Month tests', () => {
  test('Month exists', () => {
    render(<Month />);
    expect(screen.getByTestId('month')).toBeInTheDocument();
  });
  test('Month working', () => {
    expect.assertions(2);
    render(<Month month={5} year ={2021}/>);
    expect(screen.getByText('June 2021')).toBeInTheDocument();
    expect(screen.getByText('26')).toBeInTheDocument();
  });
  test('Bixiest Month working', () => {
    expect.assertions(4);
    render(<Month month={1} year ={2020}/>);
    expect(screen.getByText('February 2020')).toBeInTheDocument();
    expect(screen.getAllByText('28')).toHaveLength(2);
    expect(screen.getAllByText('29')).toHaveLength(2);
    expect(screen.getAllByText('30')).toHaveLength(1);
  });
});