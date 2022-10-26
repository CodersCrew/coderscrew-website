import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Hexagon } from '.';

describe('Hexagon', () => {
  it('should render without errors', () => {
    render(<Hexagon primaryColor="primary" opacity={100} secondaryColor="secondary" variant="default" />);
    const hexagon = screen.getByTestId('hexagon');
    expect(hexagon).toBeInTheDocument();
  });

  it('should render with icon', () => {
    render(<Hexagon primaryColor="primary" opacity={100} secondaryColor="secondary" variant="default" icon />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
