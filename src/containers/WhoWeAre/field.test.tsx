import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { whoWeAreSection } from '../../common/testData';
import { Field } from './Field';

describe('Field', () => {
  it('should render component images and text without errors', () => {
    render(
      <Field
        buttonLabel={whoWeAreSection.topButton}
        className=""
        content={whoWeAreSection.topContent}
        contentClassName=""
        imageClassName=""
        imageSrc={whoWeAreSection.topImage}
        imageAlt={whoWeAreSection.topImageAlt}
        questionField={whoWeAreSection.topQuestion}
        title={whoWeAreSection.topTitle}
      />
    );

    const testButtonLabel = whoWeAreSection.topButton;
    const testContent = whoWeAreSection.topContent;
    const testQuestion = whoWeAreSection.topQuestion;
    const testTitle = whoWeAreSection.topTitle;
    const testImageAlt = whoWeAreSection.topImageAlt;

    const buttonResult = screen.getByText(testButtonLabel);
    const contentResult = screen.getByText(testContent);
    const questionResult = screen.getByText(testQuestion);
    const titleTest = screen.getByText(testTitle);
    const imageResult = screen.getByRole('img');

    expect(buttonResult).toBeInTheDocument();
    expect(contentResult).toBeInTheDocument();
    expect(questionResult).toBeInTheDocument();
    expect(titleTest).toBeInTheDocument();
    expect(imageResult).toHaveAttribute('alt', testImageAlt);
  });
});
