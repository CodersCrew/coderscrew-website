import PeopleWithMobiles from '@/assets/peopleWithMobiles.svg';
import { Card, Hexagon, SectionWrapper } from '@/components';

export const About = () => (
  <SectionWrapper className="grid items-center justify-center gap-18 overflow-hidden lg:grid-cols-[1fr,min-content]">
    <PeopleWithMobiles className="hidden max-w-2xl lg:block" />
    <div className="flex flex-col gap-y-10">
      <div className="relative z-10">
        <Card
          header="Kim jesteśmy?"
          title="Organizacja non-profit z Wrocławia"
          text="Najważniejszą rzeczą dla nas jest rozwój – tworzenie społeczności, w której osoby gotowe do działania mogą doskonalić swoje umiejętności."
        />
        <Hexagon className="absolute -left-4 top-8 -z-10 h-[27px] w-[30px] bg-quaternary opacity-20 xl:-left-5 xl:h-[39px] xl:w-[42px]" />
        <Hexagon className="absolute -right-7 bottom-13 -z-10 h-[70px] w-[80px] bg-quaternary opacity-20 xl:-right-26 xl:h-[160px] xl:w-[172px]" />
      </div>
      <div className="relative z-10">
        <Card
          header="Odkryj najlepszą ścieżkę dla siebie"
          title="Poznaj branżę IT w praktyce"
          text="Wyróżnij się na rynku pracy unikalnym portfolio projektowym, rozwijając się w takich działach, jak web development, project management, online marketing oraz UX/UI design."
        />
        <Hexagon className="absolute -right-6 top-20 -z-10 h-[42px] w-[47px] bg-quaternary opacity-20 xl:-right-13 xl:top-26 xl:h-[72px] xl:w-[76px]" />
        <Hexagon className="absolute -bottom-6 -left-8 -z-10 h-[84px] w-[89px] bg-quaternary opacity-20 xl:-bottom-10 xl:-left-11 xl:h-[105px] xl:w-[114px]" />
      </div>
    </div>
  </SectionWrapper>
);
