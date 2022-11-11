import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RightField } from './RightField';

describe('RightField', () => {
  it('should render hexagons without errors', () => {
    const { getAllByTestId } = render(<RightField />);

    expect(getAllByTestId('hexagon')).toHaveLength(2);
  });

  it('should render image without errors', () => {
    render(<RightField />);

    const testImage = screen.getByRole('img');

    expect(testImage).toBeInTheDocument();
  });
});
