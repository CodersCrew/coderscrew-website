import type { Meta, StoryObj } from '@storybook/react';

import QuotationMark from '@/assets/quotationMark.svg';
import Facebook from '@/assets/socials/facebook.svg';

import { Hexagon as Component } from './Hexagon';

const meta: Meta<typeof Component> = {
  title: 'components/Hexagon',
  component: Component
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Hexagon = {
  args: {
    className: 'h-16 w-16 bg-quaternary opacity-20'
  }
} satisfies Story;

export const SocialIcon = {
  args: {
    variant: 'social',
    children: <Facebook className="scale-75" />
  }
} satisfies Story;

export const OpinionIcon = {
  args: {
    variant: 'opinion',
    children: <QuotationMark />
  }
} satisfies Story;
