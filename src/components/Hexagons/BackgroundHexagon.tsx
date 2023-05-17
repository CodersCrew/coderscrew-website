import { HexagonBase } from './HexagonBase';

interface BackgroundHexagonProps {
  className: string;
}

export const BackgroundHexagon = ({ className }: BackgroundHexagonProps) => (
  <HexagonBase className={`absolute ${className}`} />
);
