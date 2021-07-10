import { render, screen } from '@testing-library/react';
import App from './App';

it('should renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/dados/i);
  expect(titleElement).toBeInTheDocument();
});
