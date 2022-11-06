import { Hexagon } from '@componentsindex';
import Image from 'next/image';

import BuisnesPeople from '../../common/assets/businesspeople-office-meeting 3.png';

export const RightField = () => (
  <div className="relative mt-[16em] ml-15">
    <div className="relative">
      <div className="absolute top-[-1em] left-[-1em] h-[50vw] w-[50vw] sm:h-[55vw] sm:w-[55vw] md:h-[30vw] md:w-[30vw]  ">
        <Hexagon opacity={100} variant="default" primaryColor="codersCamp" />
      </div>
      <div className="absolute top-[-3em] right-[-2em] h-[65vw] w-[65vw] sm:right-[-6em] sm:top-[-4em] sm:h-[67vw] sm:w-[67vw] md:top-[-4em] md:right-[-10em] md:h-[400px] md:w-[400px] lg:top-[-7em] lg:right-[-12em] lg:h-[42vw] lg:w-[42vw] xl:right-[-7em] xl:h-[35vw] xl:w-[35vw]">
        <Hexagon opacity={100} variant="default" primaryColor="primary" />
      </div>
    </div>

    <div className="absolute">
      <Image src={BuisnesPeople} />
    </div>
  </div>
);
