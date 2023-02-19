import Accesto from '@/common/assets/partners/accesto.svg';
import BetterSoftware from '@/common/assets/partners/betterSoftware.svg';
import ChallengeRocket from '@/common/assets/partners/challengeRocket.svg';
import Deviniti from '@/common/assets/partners/deviniti.svg';
import Divante from '@/common/assets/partners/divante.svg';
import FourSoft from '@/common/assets/partners/fourSoft.svg';
import Freshmail from '@/common/assets/partners/freshmail.svg';
import LiveChat from '@/common/assets/partners/liveChat.svg';
import Rst from '@/common/assets/partners/rst.svg';
import Vm from '@/common/assets/partners/vm.svg';
import Zaven from '@/common/assets/partners/zaven.svg';
import { Link } from '@/components';

export const Partnerships = () => (
  <div className="mx-auto flex flex-col items-center bg-primary px-30 py-10 lg:py-24">
    <h2 className="mb-12 text-center text-2xl font-bold uppercase text-quaternary">Z kim współpracujemy</h2>
    <div className="mb-18 flex max-w-3xl flex-wrap items-center justify-evenly gap-12">
      <LiveChat />
      <Divante />
      <ChallengeRocket />
      <Freshmail />
      <Deviniti />
      <Rst />
      <Zaven />
      <FourSoft />
      <Accesto />
      <Vm />
      <BetterSoftware />
    </div>
    <Link variant="filled" href="#">
      Poznaj wszystkich partnerów
    </Link>
  </div>
);
