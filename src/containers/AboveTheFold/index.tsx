import { BottomField } from './BottomField';
import { LeftField } from './LeftField';
import { RightField } from './RightField';

export const AboveTheFold = () => (
  <section className="container mt-15 flex w-[100%]  flex-col">
    <div className="grid md:grid-cols-2">
      <LeftField />
      <RightField />
    </div>
    <BottomField />
  </section>
);
