import { Arrow } from './Arrow';
import { OpinionSlide, PartnerSlide, variants } from './Carousel';
import { OpinionsCarouselSlide } from './OpinionsCarouselSlide';
import { PartnersCarouselSlide } from './PartnersCarouselSlide';

type SlidesProps = {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  slides: Array<OpinionSlide | PartnerSlide>;
  variant: variants;
};

export const Slides = ({
  currentSlide,
  nextSlide,
  prevSlide,
  slides,
  variant
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
        {variant === 'opinions' && (
          <OpinionsCarouselSlide
            author={slide.author}
            content={slide.content}
          />
        )}
        {variant === 'partners' && (
          <PartnersCarouselSlide
            logo={slide.logo}
            content={slide.content}
            href={slide.href}
          />
        )}
        <Arrow prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    ))}
  </div>
);
