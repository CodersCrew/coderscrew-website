import { Story } from '@storybook/react';
import { ReactNode } from 'react';

import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
  decorators: [(story: () => ReactNode) => <div style={{ width: '1440px', height: '128px' }}>{story()}</div>]
};

const Template: Story = (args) => <Header {...args} />;
export const Default = Template.bind({});
