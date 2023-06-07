import type { Meta, StoryObj } from '@storybook/react';

import { Card as Component } from './Card';

const meta: Meta<typeof Component> = {
  title: 'components/Card',
  component: Component
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Card = {
  args: {
    header: '',
    title: 'Offline',
    text: 'Organizujemy hackathon offline z Livechat. Zespoły mogą i spotykają się stacjonarnie, dodatkowo mamy własną, wyposażoną siedzibę. '
  }
} satisfies Story;
