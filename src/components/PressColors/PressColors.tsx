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
  <div className="h-48 align-center flex w-[171px] flex-1 flex-col p-0 md:w-[222px]">
    <div className="shadow-colorDiv">
      <div
        className={`w-56 md:w-72 h-20 rounded-lg p-4 shadow-2xl ${div} `}
      ></div>
    </div>
    <div className="h-48 flex flex-col items-center p-0 pb-8">
      <p className="mb-2 p-4 text-xl font-semibold">{title}</p>
      <div className="text-transform: font-semibold uppercase">
        <p className="text-transform: uppercase; text-base leading-normal text-primary">
          {hex}
        </p>
        <p className="text-transform: uppercase; text-base leading-normal text-primary">
          {rgb}
        </p>
      </div>
    </div>
  </div>
);
