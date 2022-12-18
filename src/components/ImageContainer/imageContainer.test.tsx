import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { aboveTheFoldData } from '@/common/testData';

import { ImageContainer } from '.';

describe('ImageContainer', () => {
  it('should render image', () => {
    const testAltImage = aboveTheFoldData.imageAlt;

    const { getByAltText } = render(<ImageContainer imageSrc={aboveTheFoldData.imageSrc} imageAlt={testAltImage} />);

    expect(getByAltText(testAltImage)).toBeInTheDocument();
  });
});
