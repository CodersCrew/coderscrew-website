import { Story } from '@storybook/react';
import { ReactNode } from 'react';

import { Hexagon, HexProps } from '.';

export default {
  title: 'Hexagon',
  component: Hexagon,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '200px' }}>{story()}</div>],
  argTypes: {},
};

const Template: Story<HexProps> = (args) => <Hexagon {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  opacity: 100,
  variant: 'default',
  icon: false,
};
