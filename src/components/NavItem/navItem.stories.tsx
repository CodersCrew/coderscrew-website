import { navItemArr } from '@common/testData';
import { NavItem, NavItemProps } from '@components/NavItem';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

export default {
  title: 'NavItem',
  component: NavItem,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '1000px' }}>{story()}</div>]
};

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />;

export const About = Template.bind({});
About.args = {
  navItemLabel: navItemArr[0]?.label,
  dropdownItems: navItemArr[0]?.dropdownItems
};

export const Team = Template.bind({});
Team.args = {
  navItemLabel: navItemArr[1]?.label,
  dropdownItems: navItemArr[1]?.dropdownItems
};

export const Projects = Template.bind({});
Projects.args = {
  navItemLabel: navItemArr[2]?.label,
  dropdownItems: navItemArr[2]?.dropdownItems
};
