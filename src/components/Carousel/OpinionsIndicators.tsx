import { twMerge } from 'tailwind-merge';

type OpinionsIndicatorsProps = {
  count: number;
  currentSlide: number;
  setCurrentSlide: (slideNumber: number) => void;
};

export const OpinionsIndicators = ({
  count,
  currentSlide,
  setCurrentSlide
}: OpinionsIndicatorsProps) => (
  <div className="flex gap-4">
    {Array.from({ length: count }, (_, index) => (
      <button
        onClick={() => setCurrentSlide(index)}
        onKeyUp={() => setCurrentSlide(index)}
        key={index}
      >
        <div
          className={twMerge(
            'h-2 w-2 rounded',
            currentSlide === index ? 'bg-quaternary' : 'bg-dotIndicator/30'
          )}
        />
      </button>
    ))}
  </div>
);
