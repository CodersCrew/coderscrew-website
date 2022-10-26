import { NavItem, NavItemPath } from '@componentsNavItem';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

export default {
  title: 'NavItem',
  component: NavItem,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '1000px' }}>{story()}</div>],
};

const Template: Story = (args) => <NavItem item={{ label: '', path: NavItemPath.PROJECTS }} {...args} />;

export const Projects = Template.bind({});
Projects.args = { item: { label: 'Nasze Projekty', path: NavItemPath.PROJECTS } };

export const About = Template.bind({});
About.args = { item: { label: 'O nas', path: NavItemPath.PROJECTS } };
