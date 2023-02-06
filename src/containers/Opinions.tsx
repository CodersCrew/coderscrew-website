import { Link } from '@/components';

const carouselData = [
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Kornelia',
    id: 1
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Kornelia',
    id: 2
  },
  {
    content:
      '“ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam! ”',
    author: 'Kornelia',
    id: 3
  }
];

type CarouselSlideProps = {
  content: string;
  author: string;
};

const CarouselSlide = ({ content, author }: CarouselSlideProps) => (
  <div className="flex w-[290px] flex-col items-center rounded-md bg-additional-white p-6 shadow-card lg:w-[510px]">
    <div className="mb-6 h-[56px] w-[56px] bg-primary" />
    <div className="mb-4 text-center text-base font-semibold leading-normal">{content}</div>
    <div className="text-center text-base text-secondary">– {author}</div>
  </div>
);

export const Opinions = () => (
  <div className="relative z-10 flex flex-col items-center overflow-x-hidden py-24">
    <div className="mb-12 max-w-sm lg:max-w-2xl">
      <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Mówią o nas</h2>
      <p className="text-center text-xl leading-normal text-additional-white">
        Dołącz do ponad 100 członków CodersCrew, którzy rozwijają swoje pasje. Zostań naszym partnerem, jeśli interesuje
        Cię to, co robimy.
      </p>
    </div>
    <div className="mb-18 flex items-center gap-8 pl-8">
      {carouselData.map((slide) => (
        <CarouselSlide content={slide.content} author={slide.author} key={slide.id} />
      ))}
      <div />
    </div>
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
