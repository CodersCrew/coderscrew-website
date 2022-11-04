import { render } from '@testing-library/react';
import { expect } from 'vitest';

import { Hexagon } from '.';

describe('Hexagon', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(
      <Hexagon primaryColor="primary" opacity={100} secondaryColor="secondary" variant="default" />
    );

    expect(getByTestId('hexagon')).toBeInTheDocument();
  });

  it('should render with icon', () => {
    const { getByTestId } = render(
      <Hexagon primaryColor="primary" opacity={100} secondaryColor="secondary" variant="default" icon />
    );

    expect(getByTestId('icon')).toBeInTheDocument();
  });
});
