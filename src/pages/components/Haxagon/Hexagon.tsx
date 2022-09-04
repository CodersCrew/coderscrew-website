type HexagonProps = {
  width: number;
  height: number;
  hexColor: string;
};

export const Hexagon = ({ height, width, hexColor }: HexagonProps) => {
  const hexStyles = `w-0 border-x-[${width / 2}px] border-solid border-x-transparent`;
  return (
    <>
      <div className={`${hexStyles} border-b-[${height / 2}px] border-b-${hexColor}`} />
      <div className={`h-[${height}px] w-[${width}px] bg-${hexColor}`} />
      <div className={`${hexStyles} border-t-[${height / 2}px] border-t-${hexColor}`} />
    </>
  );
};
