import { ReactNode } from 'react';

import { HexagonBase } from '../HexagonBase/HexagonBase';
import { variantMap } from '../lookup';

interface IconHexagonProps {
  variant: keyof typeof variantMap;
  Icon: ReactNode;
}

export const IconHexagon = ({ variant, Icon }: IconHexagonProps) => (
  <HexagonBase className={variantMap[variant]}>{Icon}</HexagonBase>
);
