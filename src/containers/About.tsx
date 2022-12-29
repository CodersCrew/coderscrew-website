import PeopleWithMobiles from '@/common/assets/peopleWithMobiles.svg';
import { Card } from '@/components';

export const About = () => (
  <div className="grid grid-cols-[50%_min-content] items-center justify-between px-30 py-24">
    <PeopleWithMobiles />
    <div className="flex flex-col gap-10">
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
