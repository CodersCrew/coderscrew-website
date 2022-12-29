import MenWithLaptops from '@/common/assets/menWithLaptops.svg';
import { Link } from '@/components';

export const Introduction = () => (
  <div className="grid grid-cols-[50%_400px] items-center justify-between px-30 py-24">
    <div className="flex flex-col">
      <h1 className="mb-3 text-5xl font-bold leading-tight">Odkryj swoją ścieżkę kariery w branży IT</h1>
      <p className="mb-8 text-xl leading-normal">
        Ucz się, przekładając wiedzę na praktykę i wyróżnij się unikalnym portfolio! Rozwijamy pasję do działania i
        wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
      </p>
      <Link href="#" variant="outlined">
        Dowiedz się więcej
      </Link>
    </div>
    <MenWithLaptops />
  </div>
);
