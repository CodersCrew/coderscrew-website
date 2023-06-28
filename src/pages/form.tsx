import Koperta from 'assets/joinUs/Koperta.png';
import Pinezka from 'assets/joinUs/Pinezka.png';
import Zespol from 'assets/joinUs/Zespol.png';
import Image from 'next/image';

import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col">
    <section className="bg-white">
      <h1 className="text-3xl font-bold leading-10">
        Rozpocznij z nami swoją przygodę w branży IT!
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>
            Będziesz mógł tworzyć zmieniające świat projekty. Mając takie
            portfolio z pewnością zawojujesz rynek pracy!
          </p>
          <button className="border">Przejdź do formularza</button>
        </div>
        <div>
          <Image src={Zespol} alt="Zespol" className="" />
        </div>
      </div>
      <div className="flex flex-col">
        <h2>Dlaczego warto?</h2>
        <p>Postawisz pierwsze kroki w IT</p>
        <p>Wykorzystasz swój potencjał</p>
        <p>
          Będziesz uczestniczył w ambitnych projektach, które staną się
          wspaniałym wpisem do Twojego CV
        </p>
      </div>
    </section>
    <section className="w-full bg-grey">
      <h1>Nasz proces rekrutacyjny</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <img src="" alt="" />
          <span>1. Wypełnienie formularza</span>
          <p>
            Na początek poprosimy Cię o wypełnienie poniższego formularza.
            Zajmie Ci to maksymalnie 10 minut.
          </p>
        </div>
        <img src="" alt="" />
        <div className="flex flex-col">
          <img src="" alt="" />
          <span>2. Rozpatrzenie zgłoszenia </span>
          <p>
            Dzięki niemu lepiej Cię poznamy. Dowiemy się, czy Twoje zdolności
            odpowiadają naszym aktualnym potrzebom.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <img src="" alt="" />
          <span>3. Rozmowa kwalifikacyjna</span>
          <p>
            Porozmawiamy o Twoim doświadczeniu, oczekiwaniach, dyspozycyjności.
            Odpowiemy także na wszystkie pytania, jakie Ci się nasuną.{' '}
          </p>
        </div>
        <img src="" alt="" />
        <div className="flex flex-col">
          <img src="" alt="" />
          <span>4. Dołączenie do nas</span>
          <p>
            Jeśli rozmowa wypadnie pomyślnie, zostaniesz jednym z nas. Od teraz
            możemy razem zmieniać świat na lepsze!
          </p>
        </div>
      </div>
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
