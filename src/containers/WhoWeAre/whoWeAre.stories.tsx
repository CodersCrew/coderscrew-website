import { Story } from '@storybook/react';

import { WhoWeAre } from '.';

export default {
  title: 'Who We Are',
  component: WhoWeAre
};

const Template: Story = () => <WhoWeAre />;

export const Default = Template.bind({});
