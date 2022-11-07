import { Hexagon } from '@componentsindex';
import Image from 'next/image';

import BuisnessPeople from '../../common/assets/businesspeople-office-meeting 3.png';

export const RightField = () => (
  <div className="relative mt-[16em]">
    <div className="absolute top-[-1em] left-[-2em] h-[30vh] w-[30vh] sm:left-[2em] sm:h-[35vh] sm:w-[35vh] md:left-[0em] md:h-[25vh] md:w-[25vh] lg:left-[1em] xl:h-[40vh] xl:w-[40vh] 2xl:h-[45vh] 2xl:w-[45vh] ">
      <Hexagon opacity={100} variant="default" primaryColor="codersCamp" />
    </div>
    <div className="absolute top-[-3em] left-[10em] h-[65vw] w-[65vw] sm:left-[16em] sm:top-[-4em] sm:h-[52vh] sm:w-[52vh] md:top-[-4em] md:left-[calc(45%-20px)] md:h-[35vh] md:w-[35vh] lg:top-[-6em] lg:left-[12em] lg:h-[48vh] lg:w-[48vh] xl:left-[15em] xl:h-[54vh] xl:w-[54vh] 2xl:left-[16em] 2xl:h-[60vh] 2xl:w-[60vh]">
      <Hexagon opacity={100} variant="default" primaryColor="primary" />
    </div>

    <Image objectFit="contain" sizes="10" src={BuisnessPeople} />
  </div>
);
