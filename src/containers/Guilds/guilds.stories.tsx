import { guildCardsArray, guildsTextContainerData } from '@common/testData';
import { Story } from '@storybook/react';

import { Guilds } from '.';

export default {
  title: 'Guilds',
  component: Guilds
};

const Template: Story = (args) => (
  <Guilds openModal={() => {}} title="" content="" buttonContent="" guilds={[]} {...args} />
);
export const Default = Template.bind({});

const { title, content, buttonContent } = guildsTextContainerData;

Default.args = {
  title,
  content,
  buttonContent,
  guilds: guildCardsArray
};
