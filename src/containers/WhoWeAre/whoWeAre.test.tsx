import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { whoWeAreSection } from '../../common/testData';
import { WhoWeAre } from './index';

describe('WhoWeAre section', () => {
  it('should render who we are section', () => {
    render(
      <WhoWeAre
        topQuestion={whoWeAreSection.topQuestion}
        topTitle={whoWeAreSection.topTitle}
        topContent={whoWeAreSection.topContent}
        topButton={whoWeAreSection.topButton}
        topImage={whoWeAreSection.topImage}
        topImageAlt={whoWeAreSection.topImageAlt}
        bottomQuestion={whoWeAreSection.bottomQuestion}
        bottomTitle={whoWeAreSection.bottomTitle}
        bottomContent={whoWeAreSection.bottomContent}
        bottomButton={whoWeAreSection.bottomButton}
        bottomImage={whoWeAreSection.bottomImage}
        bottomImageAlt={whoWeAreSection.bottomImageAlt}
      />
    );

    const testTopTitle = whoWeAreSection.topTitle;
    const testBottomTitle = whoWeAreSection.bottomTitle;

    const topTitleResult = screen.getByText(testTopTitle);
    const bottomTitleResult = screen.getByText(testBottomTitle);

    expect(topTitleResult).toBeInTheDocument();
    expect(bottomTitleResult).toBeInTheDocument();
  });
});
