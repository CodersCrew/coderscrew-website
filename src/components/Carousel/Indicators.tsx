export type IndicatorsProps = {
  count: number;
  currentSlide: number;
  setCurrentSlide: (slideNumber: number) => void;
};

export const Indicators = ({
  count,
  currentSlide,
  setCurrentSlide
}: IndicatorsProps) => (
  <div className="flex gap-4">
    {Array.from({ length: count }, (_, index) => (
      <button
        onClick={() => setCurrentSlide(index)}
        onKeyUp={() => setCurrentSlide(index)}
        key={index}
      >
        <div
          className={`h-2 w-2 rounded ${
            currentSlide === index ? 'bg-quaternary' : 'bg-dotIndicator/30'
          }`}
        />
      </button>
    ))}
  </div>
);
