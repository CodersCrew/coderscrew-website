import { Story } from '@storybook/react';
import { ReactNode } from 'react';

import { Hexagon, HexagonProps } from '.';

export default {
  title: 'Hexagon',
  component: Hexagon,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '200px' }}>{story()}</div>],
  argTypes: {},
};

const Template: Story<HexagonProps> = (args) => <Hexagon {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  primaryColor: 'primary',
  secondaryColor: undefined,
  opacity: 100,
  icon: false,
};
