export const Hexagon = ({ hexColor }: { hexColor: string }) => {
  return (
    <div
      className={`hexagon relative justify-center bg-${hexColor} before:absolute before:bottom-full before:border-solid before:border-l-transparent before:border-r-transparent before:border-b-${hexColor} after:absolute after:top-full after:border-solid after:border-l-transparent after:border-r-transparent after:border-t-${hexColor}`}
    />
  );
};
