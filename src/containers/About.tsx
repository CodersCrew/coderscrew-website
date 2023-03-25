import PeopleWithMobiles from '@/common/assets/peopleWithMobiles.svg';
import { Card } from '@/components';
import { SectionWrapper } from '@/components/PageWrapper';

export const About = () => (
  <SectionWrapper className="grid items-center justify-center gap-18 lg:grid-cols-[1fr,min-content]">
    <PeopleWithMobiles className="hidden max-w-2xl lg:block" />
    <div className="flex flex-col gap-y-10">
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
  </SectionWrapper>
);
