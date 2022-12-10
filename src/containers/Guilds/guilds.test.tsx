import { guildCardsArray, guildsTextContainerData } from '@common/testData';
import { render } from '@testing-library/react';
import { expect } from 'vitest';

import { Guilds } from '.';

const { title, content, buttonContent } = guildsTextContainerData;

// TODO: types of guilds refactor

describe('Guilds', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(
      <Guilds title={title} content={content} buttonContent={buttonContent} guilds={guildCardsArray} />
    );

    expect(getByTestId('guilds')).toBeInTheDocument();
  });
});
