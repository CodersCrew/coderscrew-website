import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { aboveTheFoldData } from '@/common/testData';

import { TextContainer } from './TextContainer';

describe('TextContainer', () => {
  it('should render container wiht title, content and button', () => {
    const testTitle = aboveTheFoldData.title;
    const testContent = aboveTheFoldData.content;
    const testButtonContent = aboveTheFoldData.buttonContent;

    const { getByText } = render(
      <TextContainer title={testTitle} content={testContent} buttonContent={testButtonContent} />
    );

    expect(getByText(testTitle)).toBeInTheDocument();
    expect(getByText(testContent)).toBeInTheDocument();
    expect(getByText(testButtonContent)).toBeInTheDocument();
  });
});
