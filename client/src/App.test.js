import React from 'react';
import {render, fireEvent, toBeInTheDocument} from "@testing-library/react"
import App from './App';


test("renders app", () => {
  render(<App />)
})


test('it renders Women', () => {
  const { getByText } = render(<App />);
  const elem = getByText(/Women/);
  expect(elem).toBeInTheDocument();
});

