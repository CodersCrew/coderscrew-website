import challengeRocket from '../../common/assets/logotypes/challenge rocket logo.png';
import deviniti from '../../common/assets/logotypes/deviniti logo.png';
import divante from '../../common/assets/logotypes/divante logo.png';
import freshmail from '../../common/assets/logotypes/freshmail-logo-dark 1.png';
import livechat from '../../common/assets/logotypes/livechat logo.png';
import { Slider } from './Slider';

const logotypes = [
  { id: 1, src: challengeRocket, alt: 'logo challenge Rocket' },
  { id: 2, src: deviniti, alt: 'logo deviniti' },
  { id: 3, src: divante, alt: 'logo divante' },
  { id: 4, src: freshmail, alt: 'logo freshmail' },
  { id: 5, src: livechat, alt: 'logo livechat' }
];

export const BottomField = () => (
  <div className="flex h-[100px] w-[100vw] items-center justify-between bg-gradient-to-br from-additional-bgLogotypesFrom to-additional-bgLogotypesTo ">
    <div>
      <p className="whitespace-nowrap px-5 text-white">Nasi partnerzy</p>
    </div>
    <div className="flex overflow-hidden pr-40">
      <ul className="hover:pause flex animate-scroll justify-between ">
        <Slider logotypesList={logotypes} />
      </ul>
    </div>
  </div>
);
