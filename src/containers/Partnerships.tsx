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
import { BackgroundHexagon,Link  } from '@/components';

export const Partnerships = () => (
  <div className="relative mx-auto flex flex-col items-center overflow-hidden bg-primary px-30 py-10 lg:py-24">
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
    <BackgroundHexagon className="-top-12 -right-8 h-[115px] w-[120px] bg-eerieBlack lg:-top-19 lg:-right-18 lg:h-[245px] lg:w-[257px]" />
    <BackgroundHexagon className="top-0 right-18 h-[21px] w-[22px] bg-quaternary opacity-30 lg:top-2 lg:right-32 lg:h-[44px] lg:w-[46px]" />
    <BackgroundHexagon className="top-8 -right-5 h-[48px] w-[50px] rotate-[7deg] bg-dotIndicator lg:top-22 lg:-right-12 lg:h-[105px] lg:w-[114px]" />
    <BackgroundHexagon className="-bottom-14 -left-6 h-[72px] w-[78px] rotate-[25deg] bg-eerieBlack lg:-bottom-14 lg:-left-9 lg:h-[230px] lg:w-[242px] lg:rotate-90" />
    <BackgroundHexagon className="-bottom-5 left-6 h-[32px] w-[34px] rotate-[85deg] bg-dotIndicator opacity-40 lg:bottom-17 lg:left-34 lg:h-[100px] lg:w-[106px] lg:rotate-90" />
  </div>
);
