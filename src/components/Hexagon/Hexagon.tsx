import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const variantBase = 'flex items-center justify-center';

export const variants = {
  social: `${variantBase} h-13 w-13  bg-quaternary lg:h-10 lg:w-10`,
  opinion: `${variantBase} h-14 w-14 bg-linkWater`,
  guild: `${variantBase} min-h-[74px] min-w-[78px] bg-white opacity-90`
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
