import { SectionWrapper } from '@/components';
import FormJoinUs from '@/components/Form/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col items-center gap-12">
    <div className="text-2xl font-bold uppercase text-quaternary">
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <FormJoinUs />
  </SectionWrapper>
);

export default Formular;
