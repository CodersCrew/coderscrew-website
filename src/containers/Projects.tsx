import Image from 'next/image';

import Untitled1 from '@/common/assets/Untitled1.png';
import Untitled2 from '@/common/assets/Untitled2.png';
import Untitled3 from '@/common/assets/Untitled3.png';
import { Link, SectionWrapper } from '@/components';

export const Projects = () => (
  <SectionWrapper className="flex flex-col items-center gap-12 lg:gap-30">
    <div className="flex flex-col gap-4">
      <p className="text-center text-2xl font-semibold uppercase text-quaternary">Nasze projekty</p>
      <p className="text-center text-xl leading-normal">
        nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze
        projekty.
      </p>
    </div>
    <div className="flex flex-col gap-12 lg:flex-row">
      <Image src={Untitled2} alt="Project 1" width={430} height={280} objectFit="cover" />
      <Image src={Untitled1} alt="Project 2" width={430} height={280} objectFit="cover" />
      <Image src={Untitled3} alt="Project 3" width={430} height={280} objectFit="cover" />
    </div>
    <Link href="/projekty" variant="filled">
      Wszystkie projekty
    </Link>
  </SectionWrapper>
);
