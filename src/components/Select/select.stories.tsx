import { Story } from '@storybook/react';

import { Select, SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    selectOptions: { action: 'clicked' }
  }
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'UX/UI', value: 'ux-ui' },
    { label: 'WebDevelopment', value: 'web-development' },
    { label: 'HR', value: 'hr' },
    { label: 'SEO', value: 'seo' }
  ]
};
