import { HexagonBase } from '../HexagonBase/HexagonBase';

interface BackgroundHexagonProps {
  className: string;
}

export const BackgroundHexagon = ({ className }: BackgroundHexagonProps) => (
  <HexagonBase className={`absolute ${className}`} />
);
