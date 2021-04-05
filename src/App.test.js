import { render } from '@testing-library/react';
import App from './App';

test('renders form', () => {
  render(<App />);
  const formElem = document.getElementById("form")
  expect(formElem).toBeInTheDocument();
});
