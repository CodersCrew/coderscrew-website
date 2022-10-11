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
  articles: [
    {
      header: 'KIM JESTEŚMY?',
      title: 'Organizacja non-profit z Wrocławia',
      text: 'Najważniejszą rzeczą dla nas jest rozwój – tworzenie społeczności, w której osoby gotowe do działania mogą doskonalić swoje umiejętności.',
    },
  ],
};

export const TwoTitles = Template.bind({});
TwoTitles.args = {
  articles: [
    {
      header: 'Jak działamy?',
      title: 'Online',
      text: 'Działamy głównie online, choć możemy też spotykać się stacjonarnie. Od czasów pandemii wielu naszych członków to osoby spoza Wrocławia. Nasz największy projekt, CodersCamp, przeprowadziliśmy w ostatnich edycjach całkowicie zdalnie.',
    },
    {
      title: 'Offline',
      text: 'Organizujemy hackathon offline z Livechat. Zespoły mogą i spotykają się stacjonarnie, dodatkowo mamy własną, wyposażoną siedzibę.',
    },
  ],
};
