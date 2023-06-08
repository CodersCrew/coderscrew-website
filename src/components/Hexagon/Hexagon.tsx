import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  social:
    'flex h-13 w-13 items-center justify-center bg-quaternary lg:h-10 lg:w-10',
  opinion: 'flex h-14 w-14 items-center justify-center bg-linkWater',
  partner: 'flex h-[80px] w-[80px] bg-white items-center justify-center'
};

type HexagonBaseProps = {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
};

export const Hexagon = ({ className, children, variant }: HexagonBaseProps) => (
  <div
    className={twMerge(
      'rotate-90 drop-shadow clip-path-hexPolygon',
      variant && variants[variant],
      className
    )}
  >
    <div className="-rotate-90">{children}</div>
  </div>
);
