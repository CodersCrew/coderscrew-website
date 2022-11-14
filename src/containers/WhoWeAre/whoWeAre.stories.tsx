import { Story } from '@storybook/react';

import { whoWeAreSection } from '../../common/testData';
import { WhoWeAre, WhoWeAreProps } from '.';

const Template: Story<WhoWeAreProps> = (args) => <WhoWeAre {...args} />;

export default {};
export const Default = Template.bind({
  title: 'WhoWeAre',
  component: WhoWeAre
});

Default.args = {
  topQuestion: whoWeAreSection.topQuestion,
  topTitle: whoWeAreSection.topTitle,
  topContent: whoWeAreSection.topContent,
  topImage: whoWeAreSection.topImage,
  topImageAlt: whoWeAreSection.topImageAlt,
  topButton: whoWeAreSection.topButton,
  bottomQuestion: whoWeAreSection.bottomQuestion,
  bottomTitle: whoWeAreSection.bottomTitle,
  bottomContent: whoWeAreSection.bottomContent,
  bottomImage: whoWeAreSection.bottomImage,
  bottomImageAlt: whoWeAreSection.bottomImageAlt,
  bottomButton: whoWeAreSection.bottomButton
};
