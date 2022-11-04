import { ReactElement, SVGProps } from 'react';

import CloudOffline from '../../common/assets/cloudOffline.svg';
import CloudOnline from '../../common/assets/cloudOnline.svg';
import OnlineMarketing from '../../common/assets/onlineMarketing.svg';
import ProjectManagement from '../../common/assets/projectManagement.svg';
import HumanResources from '../../common/assets/svg/humanResources.svg';
import Ux_uiDesign from '../../common/assets/ux_uiDesign.svg';
import WebDevelopement from '../../common/assets/webDevelopement.svg';

const svgIcons = {
  HumanResources,
  CloudOffline,
  CloudOnline,
  OnlineMarketing,
  ProjectManagement,
  Ux_uiDesign,
  WebDevelopement,
};

type IconName = keyof typeof svgIcons;
type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;
export const Icon = svgIcons as Record<IconName, ReactComponent>;

/*
import Icons from './Icon/index.ts';

export const Icon = () => {
  return <Icon.HumanResources fill="black" />;
};
*/
