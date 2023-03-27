import ArrowSlider from '@/common/assets/arrowSlider.svg';
import DotSliderSvg from '@/common/assets/dotSlider.svg';

type CarouselSlideProps = {
  content: string;
  author: string;
  className?: string;
};

type CarouselProps = {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  setCurrentSlide: (slideNumber: number) => void;
  slides: Array<{ id: number; author: string; content: string }>;
};

const CarouselSlide = ({ content, author, className }: CarouselSlideProps) => (
  <div
    className={`flex w-[290px] cursor-pointer flex-col items-center rounded-md bg-additional-white p-6 shadow-card lg:w-[510px] ${className}`}
  >
    <div className="mb-6 h-[56px] w-[56px] bg-primary" />
    <div className="mb-4 text-center text-base font-semibold leading-normal">{content}</div>
    <div className="text-center text-base text-secondary">– {author}</div>
  </div>
);

export const Carousel = ({ currentSlide, nextSlide, prevSlide, setCurrentSlide, slides }: CarouselProps) => (
  <>
    <div className="flex">
      {slides.map((slide, index) => (
        <div key={slide.id} className={currentSlide === index ? 'flex items-center justify-between' : 'hidden'}>
          <button onClick={prevSlide}>
            <ArrowSlider className="mr-8" />
          </button>

          <CarouselSlide author={slide.author} content={slide.content} key={slide.id} />

          <button className="ml-8 rotate-180" onClick={nextSlide}>
            <ArrowSlider />
          </button>
        </div>
      ))}
    </div>
    <div className="flex gap-4">
      {slides.map((slide, index) => (
        <button
          onClick={() => setCurrentSlide(index)}
          onKeyUp={() => setCurrentSlide(index)}
          tabIndex={0}
          key={slide.id}
        >
          <DotSliderSvg className={currentSlide === index ? 'rounded bg-quaternary' : ''} />
        </button>
      ))}
    </div>
  </>
);
