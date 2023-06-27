import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col items-center gap-12">
    <div className="text-2xl">
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <FormJoin />
  </SectionWrapper>
);

export default Formular;
