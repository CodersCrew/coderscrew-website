import { useState } from 'react';

import { Link } from '@/components';

import ArrowSlider from '../common/assets/arrowSlider.svg';
import DotSliderSvg from '../common/assets/dotSlider.svg';

const carouselData = [
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Patrycja',
    id: 1
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Maira',
    id: 2
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Sylwia',
    id: 3
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Nikoletta',
    id: 4
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Kornelia',
    id: 5
  }
];

type CarouselSlideProps = {
  content: string;
  author: string;
  className?: string;
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

export const Opinions = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const goToSlide = (id: number) => {
    setActiveSlide(id);
  };

  const prevSlide = () => {
    const isFirstSlide = activeSlide === 1;
    const newSlide = isFirstSlide ? carouselData.length : activeSlide - 1;
    setActiveSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = activeSlide === carouselData.length;
    const newSlide = isLastSlide ? 1 : activeSlide + 1;
    setActiveSlide(newSlide);
  };

  return (
    <div className="relative z-10 flex flex-col items-center overflow-x-hidden py-24">
      <div className="mb-12 max-w-sm lg:max-w-2xl">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Mówią o nas</h2>
        <p className="text-center text-xl leading-normal text-additional-white">
          Dołącz do ponad 100 członków CodersCrew, którzy rozwijają swoje pasje. Zostań naszym partnerem, jeśli
          interesuje Cię to, co robimy.
        </p>
      </div>
      <div className="flex pb-10">
        {carouselData.map((slide) => (
          <div key={slide.id} className={activeSlide === slide.id ? 'flex items-center justify-between' : 'hidden'}>
            <button onClick={prevSlide}>
              <ArrowSlider className="mr-8" />
            </button>

            <CarouselSlide author={slide.author} content={slide.content} key={slide.id} />

            <button className="ml-8 rotate-180 " onClick={nextSlide}>
              <ArrowSlider />
            </button>
          </div>
        ))}
      </div>
      <div className="mx-auto mb-9 flex space-x-4">
        {carouselData.map((slide) => (
          <div
            onClick={() => goToSlide(slide.id)}
            onKeyUp={() => goToSlide(slide.id)}
            role="button"
            tabIndex={0}
            key={slide.id}
          >
            <DotSliderSvg className={activeSlide === slide.id ? 'rounded bg-quaternary' : ''} />
          </div>
        ))}
      </div>
      <div />
      <div className="flex gap-4">
        <Link href="#" variant="outlined">
          Zostań partnerem
        </Link>
        <Link href="#" variant="filled">
          Dołącz do nas
        </Link>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-[43%] -z-10 bg-primary" />
    </div>
  );
};
