import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import App from './App';


test("renders app", () => {
  render(<App />)
})


test('it renders Women', () => {
  const { getByText } = render(<App />);
  const elem = getByText(/Women/);
  expect(elem).toBeInTheDocument();
});

test("renders app", () => {
  const { getByText } = render(<App />)
  getByText(/Women/)
})
