import { twMerge } from 'tailwind-merge';

type PartnersIndicatorsProps = {
  count: number;
  currentSlide: number;
  setCurrentSlide: (slideNumber: number) => void;
};

export const PartnersIndicators = ({
  count,
  currentSlide,
  setCurrentSlide
}: PartnersIndicatorsProps) => (
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
            currentSlide === index ? 'bg-primary/75' : 'bg-white/60'
          )}
        />
      </button>
    ))}
  </div>
);
