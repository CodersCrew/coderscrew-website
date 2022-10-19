import { CommentTextData } from '@common/testData';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Comment } from '.';

describe('Comment', () => {
  it('should be rendered without errors', () => {
    const { getByTestId } = render(<Comment text={CommentTextData.text} name={CommentTextData.name} />);
    expect(getByTestId('comment')).toBeInTheDocument();
  });
});
