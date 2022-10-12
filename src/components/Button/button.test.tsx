import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Button } from '.';

describe('Button', () => {
  test('if primary button is rendered', () => {
    render(<Button type="button" variant="primary" label="Primary" onClick={() => {}} />);
    expect(screen.getByText(/primary/i)).toBeInTheDocument();
  });

  test('if secondary button is rendered', () => {
    render(<Button type="button" variant="secondary" label="Secondary" onClick={() => {}} />);
    expect(screen.getByText(/secondary/i)).toBeInTheDocument();
  });
});
