import { Link } from '@/components';

export const Opinions = () => (
  <div className="relative z-10 flex flex-col items-center px-4 py-24">
    <div className="mb-12 max-w-sm lg:max-w-2xl">
      <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Mówią o nas</h2>
      <p className="text-center text-xl leading-normal text-additional-white">
        Dołącz do ponad 100 członków CodersCrew, którzy rozwijają swoje pasje. Zostań naszym partnerem, jeśli interesuje
        Cię to, co robimy.
      </p>
    </div>
    <div className="mb-18">
      <div className="flex w-[290px] flex-col items-center bg-additional-white p-6 shadow-card md:w-[510px]">
        <div className="mb-6 h-[56px] w-[56px] bg-primary" />
        <div className="mb-4 text-center text-base font-semibold leading-normal">
          “ Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi
          możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał
          do działania nieustannie podziwiam! ”
        </div>
        <div className="text-center text-base text-secondary">– Kornelia</div>
      </div>
      <div />
    </div>
    <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch">
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
