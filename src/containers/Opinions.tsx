import { Carousel, Link, SectionWrapper } from '@/components';

const opinions = [
  {
    content:
      'Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam!',
    author: 'Kornelia',
    id: 0
  },
  {
    content:
      'To świetne miejsce na znalezienie tego, co chce się robić w życiu i rozwijanie się w tym. Cieszę się, że mogłam tu zdobyć wiele doświadczenia i rozwijać się w ciekawych projektach, a do tego poznawać interesujące osoby, z którymi można współpracować.',
    author: 'Karina',
    id: 1
  },
  {
    content:
      'Działanie w CodersCrew dało mi ogrom wiedzy, możliwość dzielenia się pasją z innymi, możliwość realizacji ciekawych projektów, wyjazdy integracyjne i branżowe, liczne szkolenia.',
    author: 'Bartek',
    id: 2
  },
  {
    content:
      'Nie spotkałam się jeszcze z tak zgranymi i otwartymi na kolejne osoby zespołami jak w CodersCrew. Nie ma tu niezdrowych relacji i wyścigu, gramy razem do jednej bramki.',
    author: 'Patrycja',
    id: 3
  },
  {
    content:
      'CodersCrew daje niesamowite szanse na rozwój, jednocześnie nie ograniczając, ale doceniając włożony wysiłek i pokazane zaangażowanie. To miejsce, a raczej społeczność, w której chce się być i działać!',
    author: 'Magda',
    id: 4
  },
  {
    content:
      'Dzięki dołączeniu do CodersCrew miałam okazję nie tylko wykorzystać wiedzę zdobytą na studiach w praktyce, ale także wzbogacić wachlarz umiejętności o nowe, wartościowe pozycje, które już dziś pomagają mi podczas tworzenia kolejnych projektów.',
    author: 'Ania',
    id: 5
  }
];

export const Opinions = () => (
  <SectionWrapper className="relative z-10 flex max-w-none flex-col items-center gap-12">
    <div className="absolute inset-0 bottom-[40%] -z-50 bg-primary" />
    <div className="max-w-2xl">
      <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Mówią o nas</h2>
      <p className="text-center text-xl leading-normal text-white">
        Dołącz do ponad 100 członków CodersCrew, którzy rozwijają swoje pasje. Zostań naszym partnerem, jeśli interesuje
        Cię to, co robimy.
      </p>
    </div>
    <Carousel slides={opinions} />
    <div className="flex flex-col items-center gap-4 xs:flex-row">
      <Link href="#" variant="outlined">
        Zostań partnerem
      </Link>
      <Link href="#" variant="filled">
        Dołącz do nas
      </Link>
    </div>
  </SectionWrapper>
);
