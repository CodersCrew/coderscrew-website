import { Story } from '@storybook/react';
import { ReactNode } from 'react';

import { navItemArr } from '@/common/testData';
import { NavItem, NavItemPath, NavItemProps } from '@/components/NavItem';

export default {
  title: 'NavItem',
  component: NavItem,
  decorators: [
    (story: () => ReactNode) => (
      <div>
        {story()}
        {Object.values(NavItemPath).map((path) => (
          <div
            id={path}
            style={{
              height: 1000,
              border: '5px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '35px'
            }}
            key={path}
          >
            {path}
          </div>
        ))}
      </div>
    )
  ]
};

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />;

export const Teams = Template.bind({});
Teams.args = {
  label: navItemArr[0]?.label,
  path: NavItemPath.TEAMS
};

export const Partners = Template.bind({});
Partners.args = {
  label: navItemArr[1]?.label,
  path: NavItemPath.PARTNERS
};

export const Projects = Template.bind({});
Projects.args = {
  label: navItemArr[2]?.label,
  path: NavItemPath.PROJECTS
};
