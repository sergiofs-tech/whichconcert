import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar'
import userEvent from '@testing-library/user-event';

describe('Month tests', () => {
  test('Elements exist', () => {
    render(<Calendar />);
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Previous month'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Next month'})).toBeInTheDocument();
  });
  test('Change months Buttons action', () => {
    render(<Calendar initialMonth={1} initialYear={2000}/>);
    expect(screen.getByText('February 2000')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {name: 'Previous month'}));
    expect(screen.getByText('January 2000')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {name: 'Previous month'}));
    expect(screen.getByText('December 1999')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {name: 'Next month'}));
    expect(screen.getByText('January 2000')).toBeInTheDocument();
  });
});