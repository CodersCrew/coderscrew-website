import type { ReactNode } from 'react';

type HexagonBaseProps = {
  className: string;
  children?: ReactNode;
};

export const HexagonBase = ({ className, children }: HexagonBaseProps) => (
  <div className={`rotate-90 clip-path-hexPolygon ${className}`}>{children}</div>
);
