import MenWithLaptops from '@/common/assets/menWithLaptops.svg';
import { Link, SectionWrapper } from '@/components';

export const Introduction = () => (
  <SectionWrapper className="grid items-center gap-18 md:grid-cols-2">
    <div className="flex flex-col">
      <h1 className="mb-3 text-3.5xl font-bold leading-tight md:text-5xl">Odkryj swoją ścieżkę kariery w branży IT</h1>
      <p className="mb-8 text-xl leading-normal md:text-xl">
        Ucz się, przekładając wiedzę na praktykę i wyróżnij się unikalnym portfolio! Rozwijamy pasję do działania i
        wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
      </p>
      <Link href="#about-us" variant="outlined">
        Dowiedz się więcej
      </Link>
    </div>
    <MenWithLaptops className="row-start-1 mx-auto max-w-sm md:col-start-2 md:max-w-md" />
  </SectionWrapper>
);
