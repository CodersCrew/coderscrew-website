import { render } from '@testing-library/react';
import { expect } from 'vitest';

import { Button } from '.';

describe('Button', () => {
  test('if primary button is rendered', () => {
    const { getByText } = render(<Button type="button" variant="primary" label="Primary" onClick={() => {}} />);

    expect(getByText(/primary/i)).toBeInTheDocument();
  });

  test('if secondary button is rendered', () => {
    const { getByText } = render(<Button type="button" variant="secondary" label="Secondary" onClick={() => {}} />);

    expect(getByText(/secondary/i)).toBeInTheDocument();
  });
});
