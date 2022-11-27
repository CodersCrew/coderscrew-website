import { aboveTheFoldData } from '@commontestData';
import { Story } from '@storybook/react';
import React from 'react';

import { ImageContainer, ImageContainerProps } from './index';

export default {
  title: 'Components/ImageContainer',
  component: ImageContainer,
  args: {
    imageSrc: 'string | StaticImageData',
    imageAlt: 'string'
  }
};

const Template: Story<ImageContainerProps> = (args: ImageContainerProps) => <ImageContainer {...args} />;

export const Default = Template.bind({});

const { imageSrc, imageAlt } = aboveTheFoldData;

Default.args = { imageSrc, imageAlt };
