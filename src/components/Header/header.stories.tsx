import { Story } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Header',
  component: Header
};

const Template: Story = (args) => <Header {...args} />;
export const Default = Template.bind({});
