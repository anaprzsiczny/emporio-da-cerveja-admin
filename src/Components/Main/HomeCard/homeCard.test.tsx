import { render, screen } from '@testing-library/react';
import HomeCard from '.';


test('Testing card in home page', () => {
  render(<HomeCard total={5} text="test"/>)
  const cardElement = screen.getByTestId("card")
  const numberElement = screen.getByText("5")
  const descriptionElement = screen.getByText("test")

  expect(cardElement).toBeInTheDocument()
  expect(numberElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
});