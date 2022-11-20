import { Story } from '@storybook/react';

import { aboveTheFoldData } from '../../common/testData';
import { AboveTheFold, AboveTheFoldProps } from '.';

export default {};

const Template: Story<AboveTheFoldProps> = (args: AboveTheFoldProps) => <AboveTheFold {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: aboveTheFoldData.imageSrc,
  imageAlt: aboveTheFoldData.imageAlt,
  title: aboveTheFoldData.title,
  content: aboveTheFoldData.content,
  buttonContent: aboveTheFoldData.buttonContent
};
