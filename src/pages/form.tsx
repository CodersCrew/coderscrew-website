import Koperta from 'assets/joinUs/Koperta.png';
import Pinezka from 'assets/joinUs/Pinezka.png';
import Zespol from 'assets/joinUs/Zespol.png';
import Image from 'next/image';

import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col">
    <section className="bg-white">
      <h1>Rozpocznij z nami swoją przygodę w branży IT!</h1>
      <div>
        <div>
          <p>
            Będziesz mógł tworzyć zmieniające świat projekty. Mając takie
            portfolio z pewnością zawojujesz rynek pracy!
          </p>
          <button>Przejdź do formularza</button>
        </div>
        <div>
          <Image src={Zespol} alt="Zespol" className="" />
        </div>
      </div>
    </section>
    <section className="w-full bg-grey">
      <h1>Nasz proces rekrutacyjny</h1>
    </section>
    <div className="pb-10 text-2xl font-bold">
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <div className="flex w-full flex-col md:flex-row">
      <div className="flex w-2/3 flex-col">
        <FormJoin />
      </div>
      <aside className="flex w-1/3 flex-col">
        <section className="flex flex-col pb-10">
          <h2 className="text-2xl font-bold">Masz pytania?</h2>
          <h2 className="pb-10 text-2xl font-bold">Skontaktuj się z nami!</h2>
          <div className="flex flex-row items-center pb-5 font-normal">
            <Image src={Koperta} alt="Koperta" className="h-[38px] w-[38px]" />
            <p className="pl-4 font-normal leading-normal">
              kontakt@coderscrew.pl
            </p>
          </div>
          <div className="flex flex-row items-center pb-5 font-normal">
            <Image src={Pinezka} alt="Pinezka" className="h-[38px] w-[34px]" />
            <p className="pl-4 font-normal leading-normal">
              ul. Powstańców Śląskich 5, pokój 610, Wrocław
            </p>
          </div>
        </section>
      </aside>
    </div>
  </SectionWrapper>
);

export default Formular;
