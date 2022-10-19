import { cardArticleData, cardDataArticlesArray } from '@common/testData';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
  decorators: [(story: () => ReactNode) => <div style={{ width: '400px' }}>{story()}</div>],
};

const Template: Story<CardProps> = (args: JSX.IntrinsicAttributes & CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  articles: [cardArticleData],
};

export const TwoTitles = Template.bind({});
TwoTitles.args = {
  articles: cardDataArticlesArray,
};
