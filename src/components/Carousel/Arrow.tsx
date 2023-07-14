import ArrowSlider from '@/assets/arrowSlider.svg';

export type ArrowProps = {
  left?: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  arrowsColor?: string;
};

export const Arrow = ({
  left = false,
  nextSlide,
  prevSlide,
  arrowsColor
}: ArrowProps) => (
  <button
    className={`hidden md:block ${left ? '' : 'rotate-180'}`}
    onClick={left ? prevSlide : nextSlide}
  >
    <div className={arrowsColor}>
      <ArrowSlider fill="currentColor" />
    </div>
  </button>
);
