import { render, screen} from '@testing-library/react';
import PageTitle from '.';

test('Testing page title', () => {
  render(<PageTitle pagina="test" />)

  const TitleElement =  screen.getByTestId("title")
  const textElement =  screen.getByText("test")

  expect(TitleElement).toBeInTheDocument()
  expect(textElement).toBeInTheDocument()
});