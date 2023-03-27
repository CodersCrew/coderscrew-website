import ArrowSlider from '@/common/assets/arrowSlider.svg';

export type ArrowProps = {
  left?: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
};

export const Arrow = ({ left = false, nextSlide, prevSlide }: ArrowProps) => (
  <button className={`hidden md:block ${left ? '' : 'rotate-180'}`} onClick={left ? prevSlide : nextSlide}>
    <ArrowSlider />
  </button>
);
