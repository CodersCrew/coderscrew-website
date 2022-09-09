import { Story } from '@storybook/react';

import { Hexagon } from '.';

export default {
  title: 'Hexagon',
  component: Hexagon,
  argTypes: {},
};

const Template: Story = (args) => <Hexagon {...args} />;

export const Default = Template.bind({});
