import { render, screen } from '@testing-library/react';
import Input from '.';

test('renders Input', () => {
  render(<Input name="test" type="text" id="1" />);
  const element =  screen.getAllByTestId("1");
  expect(element[0]).toBeInTheDocument();
});