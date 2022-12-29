import Image from 'next/image';

import Untitled1 from '@/common/assets/Untitled1.png';
import Untitled2 from '@/common/assets/Untitled2.png';
import Untitled3 from '@/common/assets/Untitled3.png';
import { Link } from '@/components';

export const Projects = () => (
  <div className="flex flex-col items-center gap-30 px-30 py-24">
    <div className="max-w-2xl">
      <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Nasze projekty</h2>
      <p className="text-center text-xl leading-normal">
        nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze projekty.nasze
        projekty.
      </p>
    </div>
    <div className="flex gap-14">
      <Image src={Untitled1} alt="Picture of the author" width={430} height={280} objectFit="cover" />
      <Image src={Untitled2} alt="Picture of the author" width={430} height={280} objectFit="cover" />
      <Image src={Untitled3} alt="Picture of the author" width={430} height={280} objectFit="cover" />
    </div>
    <Link href="#" variant="filled">
      Wszystkie projekty
    </Link>
  </div>
);
