import MenWithLaptops from '@/common/assets/menWithLaptops.svg';
import { Link } from '@/components';

export const Introduction = () => (
  <div className="mx-auto grid max-w-screen-2xl items-center px-4 pt-4 pb-8 md:grid-cols-2 lg:px-15 lg:py-24 xl:px-30">
    <div className="flex flex-col">
      <h1 className="mb-3 text-3.5xl font-bold leading-tight md:text-5xl">Odkryj swoją ścieżkę kariery w branży IT</h1>
      <p className="mb-8 text-xl leading-normal md:text-xl">
        Ucz się, przekładając wiedzę na praktykę i wyróżnij się unikalnym portfolio! Rozwijamy pasję do działania i
        wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
      </p>
      <Link href="#" variant="outlined">
        Dowiedz się więcej
      </Link>
    </div>
    <MenWithLaptops className="row-start-1 m-auto max-w-[300px] p-7 md:col-start-2 md:mr-0 md:max-w-[470px]" />
  </div>
);
