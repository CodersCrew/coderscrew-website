import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button, primaryBtn, secondaryBtn } from './Button';

describe('Button tests', () => {
  test('if primary button is rendered', () => {
    render(<Button variant={primaryBtn} text="primary" />);
    expect(screen.getByText(/primary/i)).toBeInTheDocument();
  });
  test('if secondary button is rendered', () => {
    render(<Button variant={secondaryBtn} text="secondary" />);
    expect(screen.getByText(/secondary/i)).toBeInTheDocument();
  });
});
