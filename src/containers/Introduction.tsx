import MenWithLaptops from '@/common/assets/menWithLaptops.svg';
import { Link } from '@/components';

export const Introduction = () => (
  <div className="mx-auto grid max-w-screen-2xl items-center py-8 px-15 md:grid-cols-2 md:py-18 lg:px-15 lg:py-24 xl:px-30">
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
    <MenWithLaptops className="row-start-1 mx-auto mb-8 max-w-[300px] md:col-start-2 md:mb-0 md:mr-0 md:ml-7 md:max-w-[470px]" />
  </div>
);
