import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should have 'i am modified' text", () => {
  render(<App />);
  const element = screen.getByText(/i am modified/i);
  expect(element).toBeInTheDocument();
});

test.skip("docker should detect this test", () => {
  render(<App />);
  const element = screen.getByText(/extra test/i);
  expect(element).toBeInTheDocument()
});

test("should have a header with class App-header", () => {
  const {container} = render(<App />);
  const header = container.querySelector('header');
  expect(header).toHaveClass('App-header')
})
