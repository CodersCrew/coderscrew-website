import Frame641 from '@/assets/pressPack/Frame641.png';
import Frame641black from '@/assets/pressPack/Frame641black.png';
import Frame761 from '@/assets/pressPack/Frame761.png';
import Frame761black from '@/assets/pressPack/Frame761black.png';
import { SectionWrapper } from '@/components';
import { PressCard } from '@/components/PressCard';
import { PressColors } from '@/components/PressColors';

const PressPack = () => (
  <SectionWrapper className="grid items-center overflow-hidden ">
    <div className="flex flex-col gap-y-10">
      <div className="items-left flex flex-col gap-4">
        <h1 className="mb-6 text-3.5xl font-bold leading-tight md:mb-10 md:text-5xl">
          PressPack
        </h1>
        <p className="items-left text-xl leading-normal">
          Tutaj możesz pobrać nasz logotyp w różnych wersjach, w zależności od
          potrzeb. Dołożyliśmy również oficjalne kolory wykorzystywane w
          komunikacji wizualnej naszego stowarzyszenia.
        </p>
      </div>
      <div className="align-center flex flex-col items-center">
        <div className="items-left flex max-w-3xl flex-col justify-center">
          <h2 className="mb-4 items-center text-2xl font-bold">Logo</h2>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 p-0 pb-8 md:flex-row">
            <PressCard
              src={Frame641}
              alt="Logotyp ciemny"
              title="Logotyp ciemny"
              link="#"
            />
            <PressCard
              src={Frame641black}
              alt="Logotyp biały"
              title="Logotyp biały"
              link="#"
            />
          </div>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 p-0 pb-20 md:flex-row">
            <PressCard
              src={Frame761}
              alt="Logotyp czarny druk"
              title="Logotyp czarny druk"
              link="#"
            />
            <PressCard
              src={Frame761black}
              alt="Logotyp biały druk"
              title="Logotyp biały druk"
              link="#"
            />
          </div>
          <div className="flex max-w-6xl flex-col">
            <h2 className="mb-4 items-center text-2xl font-bold">
              Kolory CodersCrew
            </h2>
            <div className="align-center flex	flex-col items-center gap-10 ">
              <div className=" flex flex-col gap-10 p-4 md:flex-row">
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
    </div>
  </SectionWrapper>
);

export default PressPack;
