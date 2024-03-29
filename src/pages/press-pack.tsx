import { SectionWrapper } from '@/components';
import { PressCard } from '@/components/PressCard';
import { PressColors } from '@/components/PressColors';
import { hexToRGB } from '@/utils/colorUtils';

const colorData = [
  { title: 'Biały', hex: '#ffffff' },
  { title: 'Niebieski', hex: '#1a90ff' },
  { title: 'Czarny', hex: '#292929' }
];

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
          <h2 className="mb-4 ml-3 items-center text-2xl md:font-bold">Logo</h2>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 p-0 pb-8 md:flex-row">
            <PressCard
              src="/pressPack/logotypCiemny.png"
              alt="Logotyp ciemny"
              title="Logotyp ciemny"
            />
            <PressCard
              src="/pressPack/logotypBiały.png"
              alt="Logotyp biały"
              title="Logotyp biały"
            />
          </div>
          <div className="w-360 rounded-8 flex flex-col items-center justify-center gap-2 p-0 pb-20 md:flex-row">
            <PressCard
              src="/pressPack/logotypCzarnyDruk.png"
              alt="Logotyp czarny druk"
              title="Logotyp czarny druk"
            />
            <PressCard
              src="/pressPack/logotypBiałyDruk.png"
              alt="Logotyp biały druk"
              title="Logotyp biały druk"
            />
          </div>
          <div className="flex max-w-6xl flex-col">
            <h2 className="mb-4 items-center text-2xl font-bold">
              Kolory CodersCrew
            </h2>
              <div className="flex flex-col gap-10 p-4 md:flex-row">
                {colorData.map(({ title, hex }) => (
                  <PressColors
                    key={hex}
                    color={`rgb(${hexToRGB(hex)})`}
                    title={title}
                    hex={hex}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default PressPack;
