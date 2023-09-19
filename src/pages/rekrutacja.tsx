import Link from 'next/link';

import Confetti from '/public/joinUs/confetti.png';
import Dialog from '/public/joinUs/dialog.png';
import Eye from '/public/joinUs/eye.png';
import Files from '/public/joinUs/file.png';
import HandArrow1 from '/public/joinUs/handArrow1.svg';
import HandArrow2 from '/public/joinUs/handArrow2.svg';
import HandArrow3 from '/public/joinUs/handArrow3.svg';
import Thic from '/public/joinUs/thic.svg';
import Vector from '/public/joinUs/vector.svg';
import Zespol from '/public/joinUs/zespol.svg';
import { SectionWrapper } from '@/components';
import { FormJoin } from '@/components/FormJoin';
import { Hexagon } from '@/components/Hexagon';
import { RecruitCard } from '@/components/RecruitCard';

const Rekrutacja = () => (
  <SectionWrapper className="pt-2">
    <div className="bg-white pb-36">
      <h1 className="relative pb-6 text-3.5xl font-bold leading-normal md:text-5xl">
        Rozpocznij z nami swoją przygodę w branży IT!
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className=" flex flex-col md:w-1/3">
          <p className="pb-12 text-2xl font-bold leading-relaxed text-textGrey">
            Będziesz mógł tworzyć zmieniające świat projekty. Mając takie
            portfolio z pewnością zawojujesz rynek pracy!
          </p>
          <Link href="#formular">
            <div className="itemjustify-end flex h-12 w-[196px] flex-row items-center border border-b-black border-e-white border-s-white border-t-white">
              <p className="pl-3">Przejdź do formularza</p>
              <div className="pl-3">
                <Vector />
              </div>
            </div>
          </Link>
        </div>
        <div className="md:w-96 mx-auto flex">
          <Zespol
            className="mx-auto h-auto max-w-full"
            alt="Obraz zespołu"
            layout="responsive"
            // width={352}
            // height={265}
          />
        </div>
      </div>
      <div className="flex-col items-center pt-15 md:flex-row">
        <div className="flex flex-col">
          <h2 className="pb-6 text-3.5xl font-bold leading-10 md:text-5xl">
            Dlaczego warto?
          </h2>
          <div className="itemjustify-end flex flex-row items-center pb-5">
            <Thic className="min-w-max" />
            <p className="pb-6 text-2xl font-bold leading-8 md:text-3.5xl">
              Postawisz pierwsze kroki w IT
            </p>
          </div>
          <div className="itemjustify-end flex flex-row items-center pb-5 ">
            <Thic className="min-w-max" />
            <p className="pb-2 text-2xl font-bold leading-8 md:text-3.5xl">
              Wykorzystasz swój potencjał
            </p>
          </div>
          <div className="itemjustify-end flex flex-row items-center pb-5">
            <Thic className="min-w-max" />
            <p className="pb-2 pr-12 text-2xl font-bold leading-8 md:text-3.5xl">
              Będziesz uczestniczył w ambitnych projektach, które staną się
              wspaniałym wpisem do Twojego CV
            </p>
          </div>
        </div>
        <div>
          <Hexagon />
        </div>
        <div>
          <Hexagon />
        </div>
      </div>
    </div>
    <section className="relative items-center justify-center bg-lightGrey px-0">
      <h1 className="pb-4 pt-8 text-4xl font-bold leading-10">
        Nasz proces rekrutacyjny
      </h1>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col">
          <RecruitCard
            src={Files}
            alt="File logo"
            title="1. Wypełnienie formularza."
            text="Na początek poprosimy Cię o wypełnienie poniższego formularza.
            Zajmie Ci to maksymalnie 10 minut."
          />
        </div>
        <div className="invisible flex items-center justify-center md:visible">
          <HandArrow1 />
        </div>
        <div className="flex flex-col pt-6">
          <RecruitCard
            src={Eye}
            alt="Eye logo"
            title="2. Rozpatrzenie zgłoszenia"
            text="Dzięki niemu lepiej Cię poznamy. Dowiemy się, czy Twoje zdolności
            odpowiadają naszym aktualnym potrzebom."
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col">
          <RecruitCard
            src={Dialog}
            alt="Dialog logo"
            title="3. Rozmowa kwalifikacyjna"
            text="Porozmawiamy o Twoim doświadczeniu, oczekiwaniach, dyspozycyjności.
            Odpowiemy także na wszystkie pytania, jakie Ci się nasuną."
          />
        </div>
        <div className="flex flex-row">
          <div className="invisible flex items-start justify-center md:visible">
            <HandArrow2 />
          </div>
          <div className="invisible flex items-center justify-center pt-15 md:visible">
            <HandArrow3 />
          </div>
        </div>
        <div className="flex flex-col pt-15">
          <RecruitCard
            src={Confetti}
            alt="Confetti logo"
            title="4. Dołączenie do nas"
            text="Jeśli rozmowa wypadnie pomyślnie, zostaniesz jednym z nas. Od teraz
            możemy razem zmieniać świat na lepsze!"
          />
        </div>
      </div>
    </section>
    <div
      className="pb-10 pt-15 text-2xl font-bold leading-tight md:w-3/5 md:pl-20 md:text-3.5xl"
      id="formular"
    >
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
    </div>
    <div className="flex w-full flex-col md:flex-row md:pl-20">
      <div className="w-ful flex flex-col">
        <FormJoin />
      </div>
    </div>
  </SectionWrapper>
);

export default Rekrutacja;
