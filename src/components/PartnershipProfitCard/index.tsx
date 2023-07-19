import { ReactNode } from 'react';

import { Hexagon } from '../Hexagon';

type PartnershipProfitCardProps = {
  HexagonIcon: ReactNode;
  heading: string;
  description: string;
};

export const PartnershipProfitCard = ({
  HexagonIcon,
  heading,
  description
}: PartnershipProfitCardProps) => (
  <div className="flex flex-col items-center gap-6">
    <div className="drop-shadow-[6px_6px_33px_rgba(0,0,0,0.2)]">
      <Hexagon variant="partner">{HexagonIcon}</Hexagon>
    </div>
    <h2 className="text-2xl font-semibold text-primary">{heading}</h2>
    <p className="w-[284px] text-center text-secondary">{description}</p>
  </div>
);
