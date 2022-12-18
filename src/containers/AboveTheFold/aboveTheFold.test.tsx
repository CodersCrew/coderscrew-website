import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { aboveTheFoldData } from '@/common/testData';

import { AboveTheFold } from '.';

describe('AboveTheFold', () => {
  it('should render component without errors', () => {
    const testImageAlt = aboveTheFoldData.imageAlt;
    const testTitle = aboveTheFoldData.title;

    const { getByAltText, getByText } = render(
      <AboveTheFold
        imageSrc={aboveTheFoldData.imageSrc}
        imageAlt={testImageAlt}
        title={testTitle}
        content={aboveTheFoldData.content}
        buttonContent={aboveTheFoldData.content}
      />
    );

    expect(getByAltText(testImageAlt)).toBeInTheDocument();
    expect(getByText(testTitle)).toBeInTheDocument();
  });
});
