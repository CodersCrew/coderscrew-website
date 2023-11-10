import { hexToRGB } from '@/utils/colorUtils';

type PressColorsProps = {
  color: string;
  title: string;
  hex: string;
};

export const PressColors = ({ color, title, hex }: PressColorsProps) => {
  const rgb = hexToRGB(hex);

  return (
    <div className="h-48 align-center flex w-[171px] flex-1 flex-col p-0 md:w-[222px]">
      <div className="shadow-lg">
        <div
          className="w-56 md:w-72 h-20 rounded-lg p-4 shadow-2xl"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className="h-48 flex flex-col items-center p-0 pb-8">
        <p className="mb-2 p-4 text-xl font-semibold">{title}</p>
        <div className="font-semibold uppercase">
          <p className="text-base uppercase leading-normal text-primary">
            hex: {hex}
          </p>
          <p className="text-base uppercase leading-normal text-primary">
            rgb: {rgb}
          </p>
        </div>
      </div>
    </div>
  );
};
