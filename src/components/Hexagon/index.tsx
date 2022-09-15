import { ReactNode } from 'react';

export const hexColors: { [key: string]: string } = {
  blue: `bg-blue`,
  primary: 'bg-[#292929]',
  secondary: 'bg-[#4B545C]',
  'light-grey': 'bg-[#1A90FF]',
  PM: 'bg-[#1BC55F]',
  Marketing: 'bg-[#F0656F]',
  'Web-dev': 'bg-[#0075FF]',
  'UX-UI': 'bg-[#FA8A43]',
  'Data-science': 'bg-[#AC6DE8]',
  CodersCamp: 'bg-[#FEC43D]',
  white: 'bg-[#FFF]',
  'dark-white': 'bg-[#FAFAFA]',
  transparent: 'bg-transparent',
};
export interface HexProps {
  hexColor: string;
  children?: ReactNode;
}

export const Hexagon = ({ hexColor, children }: HexProps) => {
  const colorClasses = hexColors[hexColor];
  return (
    <div className={`hexagon relative h-full w-full ${colorClasses}`}>
      <div className="caption absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-center">
        {children}
      </div>
    </div>
  );
};
