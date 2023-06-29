import Confetti from 'assets/confetti.svg';
import Dialog from 'assets/dialog.svg';
import Eye from 'assets/eye.svg';
import File from 'assets/file.svg';
import Thic from 'assets/thic.svg';
import Vector from 'assets/vector.svg';
import Zespol from 'assets/zespol.svg';
import Link from 'next/link';

import { Hexagon } from '@/components';
import { SectionWrapper } from '@/components';
import { CardRecruitProcess } from '@/components/CardRecruitProcess';
import { FormJoin } from '@/components/FormJoin';

const Formular = () => (
  <SectionWrapper className="flex flex-col">
    <section className="bg-white">
      <h1 className="w-3/5 pb-6 text-5xl font-bold leading-10">
        Rozpocznij z nami swoją przygodę w branży IT!
      </h1>
      <div className="flex flex-row">
        <div className="flex w-1/4 flex-col pb-10 text-2xl	">
          <p>
            Będziesz mógł tworzyć zmieniające świat projekty. Mając takie
            portfolio z pewnością zawojujesz rynek pracy!
          </p>
          <div className="w-72 border-b-indigo-500 flex h-12 flex-row border">
            <p>Przejdź do formularza</p>
            <Vector />
          </div>
        </div>
        <div className="flex flex-row items-start">
          <Zespol />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <h2 className="pb-6 text-5xl font-bold leading-10">
            Dlaczego warto?
          </h2>
          <div className="flex flex-row">
            <Thic />
            <p className="pb-4 text-3.5xl font-bold leading-10">
              Postawisz pierwsze kroki w IT
            </p>
          </div>
          <div className="flex flex-row">
            <Thic />
            <p className="w-1/4 pb-4 text-3.5xl font-bold leading-10">
              Wykorzystasz swój potencjał
            </p>
          </div>
          <div className="flex flex-row">
            <Thic />
            <p className="w-1/4 pb-4 text-3.5xl font-bold leading-10">
              Będziesz uczestniczył w ambitnych projektach, które staną się
              wspaniałym wpisem do Twojego CV
            </p>
          </div>
        </div>
        <Hexagon />
        <div>
          <Hexagon />
        </div>
      </div>
    </section>
    <section className="w-full bg-grey">
      <h1 className="pb-4 text-3xl font-bold leading-10">
        Nasz proces rekrutacyjny
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <File />
          <span className="w-2/5 pb-4 text-2xl font-bold leading-10">
            1. Wypełnienie formularza
          </span>
          <p className="w-2/5">
            Na początek poprosimy Cię o wypełnienie poniższego formularza.
            Zajmie Ci to maksymalnie 10 minut.
          </p>
        </div>
        <Eye />
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
          <Dialog />
          <span>3. Rozmowa kwalifikacyjna</span>
          <p>
            Porozmawiamy o Twoim doświadczeniu, oczekiwaniach, dyspozycyjności.
            Odpowiemy także na wszystkie pytania, jakie Ci się nasuną.{' '}
          </p>
        </div>
        <img src="" alt="" />
        <div className="flex flex-col">
          <Confetti />
          <span>4. Dołączenie do nas</span>
          <p>
            Jeśli rozmowa wypadnie pomyślnie, zostaniesz jednym z nas. Od teraz
            możemy razem zmieniać świat na lepsze!
          </p>
        </div>
      </div>
    </section>
    <div className="w-3/5 pb-10 pl-20 pt-15 text-3.5xl font-bold">
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <div className="flex w-full flex-col pl-20 md:flex-row">
      <div className="w-ful flex flex-col">
        <FormJoin />
      </div>
    </div>
  </SectionWrapper>
);

export default Formular;
