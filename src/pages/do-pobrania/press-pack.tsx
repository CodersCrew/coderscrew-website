import Frame641 from '@/assets/pressPack/Frame641.png';
import Frame641black from '@/assets/pressPack/Frame641black.png';
import Frame761 from '@/assets/pressPack/Frame761black.png';
import Frame761black from '@/assets/pressPack/Frame761black.png';
import { SectionWrapper } from '@/components';
import { PressCard } from '@/components/PressCard';
import { PressColors } from '@/components/PressColors';

const PressPack = () => (
  <SectionWrapper className="grid items-center gap-18 overflow-hidden lg:grid-cols-[1fr,min-content]">
    <div className="flex flex-col gap-y-10">
      <div className="items-left flex flex-col gap-4">
        <h1 className="mb-8 text-3.5xl font-bold leading-tight md:mb-25 md:text-5xl">
          PressPack
        </h1>
        <p className="items-left text-xl leading-normal">
          Tutaj możesz pobrać nasz logotyp w różnych wersjach, w zależności od
          potrzeb. Dołożyliśmy również oficjalne kolory wykorzystywane w
          komunikacji wizualnej naszego stowarzyszenia.
        </p>
      </div>
      <div
        className="align -center flex flex-col
      items-center"
      >
        <div className="items-left flex max-w-3xl flex-col justify-center">
          <h2 className="mb-4 items-center text-2xl font-bold">Logo</h2>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 bg-white p-0 pb-8 md:flex-row">
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
          </div>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 bg-white p-0 pb-8 md:flex-row">
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
          <div className="w-56 flex flex-col gap-12">
            <h2 className="mb-4 items-center text-2xl font-bold">
              Kolory CoderCrew
            </h2>
            <div className="w-56 flex flex-col gap-12 lg:flex-row">
              <PressColors
                div="bg-white"
                title="Biały"
                hex="hex: #ffffff"
                rgb="rgb: 255, 255, 255"
              />
              <PressColors
                div="bg-quaternary"
                title="Niebieski"
                hex="hex: #1a90ff"
                rgb="rgb: 26, 144, 255"
              />
              <PressColors
                div="bg-black"
                title="Czarny"
                hex="hex: #292929"
                rgb="rgb: 41, 41, 41"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default PressPack;
