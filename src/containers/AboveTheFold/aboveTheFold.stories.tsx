import { Story } from '@storybook/react';

import { aboveTheFoldData } from '../../common/testData';
import { AboveTheFold, AboveTheFoldProps } from '.';

export default {
  title: 'Above the fold',
  component: AboveTheFold
};

const Template: Story<AboveTheFoldProps> = (args: AboveTheFoldProps) => <AboveTheFold {...args} />;

export const Default = Template.bind({});

const { imageSrc, imageAlt, title, content, buttonContent } = aboveTheFoldData;

Default.args = {
  imageSrc,
  imageAlt,
  title,
  content,
  buttonContent
};
