// import { BottomField } from './BottomField';
import { LeftField } from './LeftField';
import { RightField } from './RightField';

export const AboveTheFold = () => (
  <section className="container mt-15 grid w-[100%] grid-rows-1">
    <div className="grid h-[775px] md:grid-cols-2">
      <LeftField />
      <RightField />
    </div>

    {/* <BottomField /> */}
  </section>
);
