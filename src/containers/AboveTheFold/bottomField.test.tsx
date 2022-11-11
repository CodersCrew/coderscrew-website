import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BottomField } from './BottomField';

describe('BottomField', () => {
  it('should render slider', () => {
    render(<BottomField />);

    const testSlider = screen.getAllByRole('img');

    expect(testSlider).toHaveLength(5);
  });

  it('should render text', () => {
    render(<BottomField />);

    const testText = screen.getByText('Nasi partnerzy');

    expect(testText).toBeInTheDocument();
  });
});
