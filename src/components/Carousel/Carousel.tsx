import { useState } from 'react';

import { Indicators } from './Indicators';
import { Slides } from './Slides';

type CarouselProps = {
  slides: Array<{ id: number; author: string; content: string }>;
};

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;

    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;

    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <Slides
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slides={slides}
      />
      <Indicators
        count={slides.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};
