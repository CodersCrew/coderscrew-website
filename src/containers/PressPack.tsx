import Frame641 from '@/assets/pressPack/Frame641.png';
import Frame641black from '@/assets/pressPack/Frame641black.png';
import Frame761 from '@/assets/pressPack/Frame761black.png';
import Frame761black from '@/assets/pressPack/Frame761black.png';
import { PressCard, PressColors, SectionWrapper } from '@/components';

export const PressPack = () => (
  <SectionWrapper className="grid items-center justify-center gap-18 overflow-hidden lg:grid-cols-[1fr,min-content]">
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-4">
        <h1>PressPack </h1>
        <p className="text-center text-xl leading-normal">
          Tutaj możesz pobrać nasz logotyp w różnych wersjach, w zależności od
          potrzeb. Dołożyliśmy również oficjalne kolory wykorzystywane w
          komunikacji wizualnej naszego stowarzyszenia.{' '}
        </p>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row">
        <PressCard
          src={Frame641}
          alt="Logo ciemne"
          title="Logo ciemne"
          link="#"
        />
        <PressCard
          src={Frame641black}
          alt="Logo białe"
          title="Logo białe"
          link="#"
        />
        <PressCard
          src={Frame761}
          alt="Logo czarne druk"
          title="Logo czarne druk"
          link="#"
        />
        <PressCard
          src={Frame761black}
          alt="Logo białe druk"
          title="Logo białe druk"
          link="#"
        />
      </div>
      <div className="flex flex-col gap-12 lg:flex-row">
        <PressColors
          div="bg-white"
          title="Biały"
          hex="hex: #ffffff"
          rgb="rgb: 255, 255, 255"
        />
        <PressColors
          div="bg-white"
          title="Niebieski"
          hex="hex: #1a90ff"
          rgb="rgb: 26, 144, 255"
        />
        <PressColors
          div="bg-white"
          title="Czarny"
          hex="hex: #292929"
          rgb="rgb: 41, 41, 41"
        />
      </div>
    </div>
  </SectionWrapper>
);
