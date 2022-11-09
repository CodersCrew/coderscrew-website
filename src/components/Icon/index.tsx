import CloudOffline from '@assets/cloudOffline.svg';
import CloudOnline from '@assets/cloudOnline.svg';
import HumanResources from '@assets/humanResources.svg';
import OnlineMarketing from '@assets/onlineMarketing.svg';
import ProjectManagement from '@assets/projectManagement.svg';
import UxDesign from '@assets/uxDesign.svg';
import WebDevelopement from '@assets/webDevelopment.svg';
import { ReactElement, SVGProps } from 'react';

const svgIcons = {
  HumanResources,
  CloudOffline,
  CloudOnline,
  OnlineMarketing,
  ProjectManagement,
  UxDesign,
  WebDevelopement
};

export type IconName = keyof typeof svgIcons;
type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;
export const Icon = svgIcons as Record<IconName, ReactComponent>;

/*
import Icons from './Icon/index.ts';

export const Icon = () => {
  return <Icon.HumanResources fill="black" />;
};
*/
