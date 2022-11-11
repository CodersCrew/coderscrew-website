import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LeftField } from './LeftField';

describe('LeftField', () => {
  it('should render buttons without errors', () => {
    render(<LeftField />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it('should render hexagon without error', () => {
    const { getByTestId } = render(<LeftField />);

    expect(getByTestId('hexagon')).toBeInTheDocument();
  });
});
