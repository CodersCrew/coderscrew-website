import { ReactNode, useState } from 'react';

import { OpinionsIndicators } from './OpinionsIndicators';
import { PartnersIndicators } from './PartnersIndicators';
import { Slides } from './Slides';

export type OpinionSlide = {
  id: number;
  author: string;
  content: string;
};

export type PartnerSlide = {
  id: number;
  logo: ReactNode;
  content: string;
  href: string;
};

export type variants = 'opinions' | 'partners';

type CarouselProps = {
  slides: Array<OpinionSlide | PartnerSlide>;
  variant: variants;
  arrowsColor?: string;
};

export const Carousel = ({ slides, variant, arrowsColor }: CarouselProps) => {
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
        variant={variant}
        arrowsColor={arrowsColor}
      />
      {variant === 'opinions' && (
        <OpinionsIndicators
          count={slides.length}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      )}
      {variant === 'partners' && (
        <PartnersIndicators
          count={slides.length}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      )}
    </div>
  );
};
