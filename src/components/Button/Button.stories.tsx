import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Primary',
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  label: 'Primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
};
