import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';

export const FormBody = () => (
  <SectionWrapper className="grid items-center justify-center gap-18 overflow-hidden lg:grid-cols-[1fr,min-content]">
    <div className="flex flex-col ">
      <FormJoin />
    </div>
  </SectionWrapper>
);
