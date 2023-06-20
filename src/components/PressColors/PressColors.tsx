type PressColorsProps = {
  div: string;
  title: string;
  hex: string;
  rgb: string;
};

export const PressColors: React.FC<PressColorsProps> = ({
  div,
  title,
  hex,
  rgb
}) => (
  <div className="h-48 rounded-8 w-56 flex flex-col items-center gap-6 bg-white p-0 pb-8">
    <div className={`h-20 rounded-lg	p-4 shadow-lg ${div}`}></div>
    <p className="mb-2 text-xl font-semibold">{title}</p>
    <p className="text-transform: uppercase; text-base leading-normal text-primary">
      {hex}
    </p>
    <p className="text-transform: uppercase; text-base leading-normal text-primary">
      {rgb}
    </p>
  </div>
);
