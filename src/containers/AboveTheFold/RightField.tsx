import { Hexagon } from '@componentsindex';
import Image from 'next/image';

import BuisnessPeople from '../../common/assets/businesspeople-office-meeting 3.png';

export const RightField = () => (
  <div className="container relative ml-5 mt-[6em] flex justify-start md:mt-[16em]">
    <div className="flex">
      <div className="mt-5 mb-[8em] h-[9em] w-[10em] md:mt-10 md:mb-[14.5em] md:h-[18em] md:w-[19em]">
        <Hexagon opacity={100} variant="default" primaryColor="codersCamp" />
      </div>
      <div className="absolute bottom-15 left-[7em] h-[14em] w-[16em] md:bottom-32 md:left-[12em] md:h-[25em] md:w-[37em] md:pr-[5em]">
        <Hexagon opacity={100} variant="default" primaryColor="primary" />
      </div>
    </div>

    <div className="absolute bottom-0 w-[20em] md:w-[39em] ">
      <Image objectFit="contain" sizes="10" width="130%" height="100%" src={BuisnessPeople} />
    </div>
  </div>
);
