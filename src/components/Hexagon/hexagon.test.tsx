import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Hexagon } from '.';

describe('Hexagon tests', () => {
  test('if hexagon is rendered', () => {
    render(<Hexagon color="blue" opacity={100} iconOrShadowColor="blue" variant="default" />);
    const hexagon = screen.getByTestId('hexagon');
    expect(hexagon).toBeInTheDocument();
  });

  test('if hexagon with icon is rendered', () => {
    render(<Hexagon color="blue" opacity={100} iconOrShadowColor="blue" variant="default" icon />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
