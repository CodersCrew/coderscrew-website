import { cardArticleData } from '@common/testData';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Card } from '.';

describe('Card', () => {
  it('should be rendered without errors', () => {
    render(<Card articles={[cardArticleData]} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });
});
