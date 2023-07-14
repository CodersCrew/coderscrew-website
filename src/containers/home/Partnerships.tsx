import Accesto from '@/assets/partners/white/accesto.svg';
import BetterSoftware from '@/assets/partners/white/betterSoftware.svg';
import ChallengeRocket from '@/assets/partners/white/challengeRocket.svg';
import Deviniti from '@/assets/partners/white/deviniti.svg';
import Divante from '@/assets/partners/white/divante.svg';
import FourSoft from '@/assets/partners/white/fourSoft.svg';
import Freshmail from '@/assets/partners/white/freshmail.svg';
import LiveChat from '@/assets/partners/white/liveChat.svg';
import Rst from '@/assets/partners/white/rst.svg';
import Vm from '@/assets/partners/white/vm.svg';
import Zaven from '@/assets/partners/white/zaven.svg';
import { Hexagon, Link } from '@/components';

export const Partnerships = () => (
  <div className="relative mx-auto flex flex-col items-center overflow-hidden bg-primary px-30 py-10 lg:py-24">
    <h2 className="mb-12 text-center text-2xl font-bold uppercase text-quaternary">
      Z kim współpracujemy
    </h2>
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
    <Link variant="filled" href="/partnerzy">
      Poznaj wszystkich partnerów
    </Link>
    <Hexagon className="absolute -right-8 -top-12 h-[115px] w-[120px] bg-eerieBlack lg:-right-18 lg:-top-19 lg:h-[245px] lg:w-[257px]" />
    <Hexagon className="absolute right-18 top-0 h-[21px] w-[22px] bg-quaternary opacity-30 lg:right-32 lg:top-2 lg:h-[44px] lg:w-[46px]" />
    <Hexagon className="absolute -right-5 top-8 h-[48px] w-[50px] rotate-[7deg] bg-dotIndicator lg:-right-12 lg:top-22 lg:h-[105px] lg:w-[114px]" />
    <Hexagon className="absolute -bottom-14 -left-6 h-[72px] w-[78px] rotate-[25deg] bg-eerieBlack lg:-bottom-14 lg:-left-9 lg:h-[230px] lg:w-[242px] lg:rotate-90" />
    <Hexagon className="absolute -bottom-5 left-6 h-[32px] w-[34px] rotate-[85deg] bg-dotIndicator opacity-40 lg:bottom-17 lg:left-34 lg:h-[100px] lg:w-[106px] lg:rotate-90" />
  </div>
);
