import challengeRocket from '../../common/assets/logotypes/challenge rocket logo.png';
import deviniti from '../../common/assets/logotypes/deviniti logo.png';
import divante from '../../common/assets/logotypes/divante logo.png';
import freshmail from '../../common/assets/logotypes/freshmail-logo-dark 1.png';
import livechat from '../../common/assets/logotypes/livechat logo.png';
import { Slider } from './Slider';

const logotypes = [
  { id: '1', src: challengeRocket },
  { id: '2', src: deviniti },
  { id: '3', src: divante },
  { id: '4', src: freshmail },
  { id: '5', src: livechat }
];

export const BottomField = () => (
  <div className="flex h-[100px] w-[100vw] items-center justify-between bg-gradient-to-br  from-addditional-bgLogotypesFrom to-addditional-bgLogotypesTo">
    <div>
      <p className="whitespace-nowrap px-10 pl-5 text-white">Nasi partnerzy</p>
    </div>
    <div className="hover:pause flex overflow-hidden pr-40">
      <ul className="hover:pause flex animate-scroll justify-between ">
        <Slider logotypesList={logotypes} />
      </ul>
    </div>
  </div>
);
