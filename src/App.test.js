import { render } from '@testing-library/react';
import App from './App';

test('App snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
