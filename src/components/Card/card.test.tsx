import { cardArticleData } from '@common/testData';
import { render } from '@testing-library/react';
import { expect } from 'vitest';

import { Card } from '.';

describe('Card', () => {
  it('should be rendered without errors', () => {
    const { getByTestId } = render(<Card articles={[cardArticleData]} />);

    expect(getByTestId('card')).toBeInTheDocument();
  });
});
