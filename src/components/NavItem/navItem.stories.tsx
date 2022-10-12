import { NavItem } from '@componentsNavItem';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

export default {
  title: 'NavItem',
  component: NavItem,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '1000px' }}>{story()}</div>],
};

const Template: Story = (args) => <NavItem label="Nasze Projekty" {...args} />;

export const Default = Template.bind({});
