import { Arrow } from './Arrow';
import { CarouselSlide } from './CarouselSlide';

type SlidesProps = {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  slides: Array<{ id: number; author: string; content: string }>;
};

export const Slides = ({
  currentSlide,
  nextSlide,
  prevSlide,
  slides
}: SlidesProps) => (
  <div className="flex">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={
          currentSlide === index
            ? 'flex items-center justify-between gap-8'
            : 'hidden'
        }
      >
        <Arrow left prevSlide={prevSlide} nextSlide={nextSlide} />
        <CarouselSlide author={slide.author} content={slide.content} />
        <Arrow prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    ))}
  </div>
);
