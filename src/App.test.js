import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fashion lab homepage', () => {
  render(<App />);

  expect(screen.getAllByText(/SUMMER SALE UP TO 50%/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Student Information/i)).toBeInTheDocument();
});
