import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AboveTheFold } from './index';

describe('AboveTheFold', () => {
  it('should render AboveTheFold container', () => {
    const { getByText, getAllByRole } = render(<AboveTheFold />);

    const testH1 = getByText('Odkryj swoją ścieżkę kariery w branży IT');
    const textImages = getAllByRole('img');

    expect(testH1).toBeInTheDocument();
    expect(textImages).toHaveLength(6);
  });
});
