import { Story } from '@storybook/react';

import { Hexagon, HexProps } from '.';

export default {
  title: 'Hexagon',
  component: Hexagon,
  argTypes: {},
};

const Template: Story<HexProps> = (args) => <Hexagon {...args} />;

export const Default = Template.bind({});

Default.args = {
  hexColor: 'blue',
  hexSize: 100,
};
