import { ReactNode } from 'react';

import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
  decorators: [(story: () => ReactNode) => <div style={{ width: '310px' }}>{story()}</div>],
};

const Template = (args: JSX.IntrinsicAttributes & CardProps) => <Card {...args} />;
export const Default = Template.bind({});
