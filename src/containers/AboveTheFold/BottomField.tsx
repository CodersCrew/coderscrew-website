import { logotypes } from '@commontestData';

import { Slider } from './Slider';

export const BottomField = () => (
  <div className="container flex h-[100px] w-[100vw] items-center bg-gradient-to-br from-additional-bgLogotypesFrom to-additional-bgLogotypesTo ">
    <div>
      <p className="mr-2 whitespace-nowrap pl-5 text-white sm:mr-0 sm:pl-15">Nasi partnerzy</p>
    </div>
    <div className="ml-4 flex overflow-hidden pr-20">
      <ul className="hover:pause flex animate-scroll justify-between">
        <Slider logotypesList={logotypes} />
      </ul>
    </div>
  </div>
);
