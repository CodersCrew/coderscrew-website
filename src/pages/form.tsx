import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col">
    <div className="pb-10 text-2xl">
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <FormJoin />
  </SectionWrapper>
);

export default Formular;
