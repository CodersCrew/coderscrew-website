type PressColorsProps = {
  title: string;
  hex: string;
  rgb: string;
};

export const PressColors = ({ title, hex, rgb }: PressColorsProps) => (
  <div className="flex flex-col gap-y-10">
    <div className="flex flex-col gap-y-10 rounded-lg"></div>
    <p className="mt-auto grow-0 self-stretch text-3xl font-bold leading-tight tracking-wide lg:text-2xl 2xl:text-3xl">
      {title}
    </p>
    <p className="text-transform: uppercase; text-base leading-normal text-primary">
      {hex}
    </p>
    <p className="text-transform: uppercase; text-base leading-normal text-primary">
      {rgb}
    </p>
  </div>
);
