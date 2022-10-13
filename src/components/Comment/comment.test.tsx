import { CommentTextData } from '@common/testData';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Comment } from '.';

describe('Comment', () => {
  it('should be rendered without errors', () => {
    render(<Comment text={CommentTextData.text} name={CommentTextData.name} />);
    const comment = screen.getByTestId('comment');
    expect(comment).toBeInTheDocument();
  });
});
