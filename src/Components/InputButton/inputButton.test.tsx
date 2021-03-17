import { render, screen } from '@testing-library/react';
import InputButton from '.';

test('Testing Button', () => {
  render(<InputButton content="test" />)
  const buttonElement = screen.getByTestId("btn")
  const contentButton = screen.getByText("test")
  
  expect(buttonElement).toBeInTheDocument()
  expect(contentButton).toBeInTheDocument()
})