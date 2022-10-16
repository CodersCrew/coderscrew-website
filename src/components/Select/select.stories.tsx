import { Story } from '@storybook/react';

import { Select, SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    selectOptions: { action: 'clicked' },
  },
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'UX/UI', value: 1 },
    { label: 'WebDevelopment', value: 2 },
    { label: 'HR', value: 3 },
    { label: 'SEO', value: 4 },
  ],
};
