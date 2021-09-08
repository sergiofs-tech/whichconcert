import { render, screen } from '@testing-library/react';
import App from './App';

test('App component', () => {
  render(<App />);
  const linkElement = screen.getByText('Which Concert?');
  expect(linkElement).toBeInTheDocument();
});
