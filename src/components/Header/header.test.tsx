import { render } from '@testing-library/react';
import { expect } from 'vitest';

import { Header } from '.';

describe('Header', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
