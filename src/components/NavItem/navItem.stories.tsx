import { navItemArr } from '@common/testData';
import { NavItem } from '@components/NavItem';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

export default {
  title: 'NavItem',
  component: NavItem,
  decorators: [(story: () => ReactNode) => <div style={{ width: '200px', height: '1000px' }}>{story()}</div>]
};

const Template: Story = (args) => (
  <NavItem
    item={{
      label: '',
      dropdownItems: []
    }}
    {...args}
  />
);

export const About = Template.bind({});
About.args = { item: { label: navItemArr[0]?.label, dropdownItems: navItemArr[0]?.dropdownItems } };

export const Team = Template.bind({});
Team.args = { item: { label: navItemArr[1]?.label, dropdownItems: navItemArr[1]?.dropdownItems } };

export const Projects = Template.bind({});
Projects.args = { item: { label: navItemArr[2]?.label, dropdownItems: navItemArr[2]?.dropdownItems } };
