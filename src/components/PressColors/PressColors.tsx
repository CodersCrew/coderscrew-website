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
  <div className="h-48 flex w-full flex-col bg-white p-0 pb-8">
    <div className={`w-80 h-20 rounded-lg p-4 shadow-lg ${div}`}></div>
    <div className="h-48 flex w-full flex-col items-center bg-white p-0 pb-8">
      <p className="mb-2 p-4 text-xl font-semibold">{title}</p>
      <p className="text-transform: uppercase; text-base leading-normal text-primary">
        {hex}
      </p>
      <p className="text-transform: uppercase; text-base leading-normal text-primary">
        {rgb}
      </p>
    </div>
  </div>
);
