export interface HexProps {
  hexColor: string;
  hexSize: number;
}

export const Hexagon = ({ hexColor, hexSize }: HexProps) => {
  const hexSizes: { [key: number]: string } = {
    100: `h-[100px] w-[100px]`,
  };
  const hexColors: { [key: string]: string } = {
    blue: `bg-blue`,
  };
  const sizeClasses = hexSizes[hexSize];
  const colorClasses = hexColors[hexColor];

  return <div className={`hexagon ${sizeClasses} ${colorClasses}`} />;
};
