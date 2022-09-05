import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from './Button';

describe('Button tests', () => {
  test('if primary button is rendered', () => {
    render(<Button variant="primary" label="Primary" />);
    expect(screen.getByText(/primary/i)).toBeInTheDocument();
  });
  test('if secondary button is rendered', () => {
    render(<Button variant="secondary" label="Secondary" />);
    expect(screen.getByText(/secondary/i)).toBeInTheDocument();
  });
});
