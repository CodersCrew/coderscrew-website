import { HexagonBase } from './HexagonBase';

type BackgroundHexagonProps = {
  className: string;
};

export const BackgroundHexagon = ({ className }: BackgroundHexagonProps) => (
  <HexagonBase className={`absolute ${className}`} />
);
