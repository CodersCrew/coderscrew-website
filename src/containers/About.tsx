import PeopleWithMobiles from '@/common/assets/peopleWithMobiles.svg';
import { Card } from '@/components';

export const About = () => (
  <div className="mx-auto grid max-w-screen-2xl items-center px-4 py-18 md:grid-cols-[1fr,min-content] lg:px-15 lg:py-24 xl:px-30">
    <PeopleWithMobiles className="hidden max-w-[689px] pr-7 md:block" />
    <div className="m-auto flex flex-col gap-y-10">
      <Card
        header="Kim jesteśmy?"
        title="Organizacja non-profit z Wrocławia"
        text="Najważniejszą rzeczą dla nas jest rozwój – tworzenie społeczności, w której osoby gotowe do działania mogą doskonalić swoje umiejętności."
      />
      <Card
        header="Odkryj najlepszą ścieżkę dla siebie"
        title="Poznaj branżę IT w praktyce"
        text="Wyróżnij się na rynku pracy unikalnym portfolio projektowym, rozwijając się w takich działach, jak web development, project management, online marketing oraz UX/UI design."
      />
    </div>
  </div>
);
