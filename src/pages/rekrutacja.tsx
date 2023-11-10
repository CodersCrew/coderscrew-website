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
  <div>
    <SectionWrapper>
      <section className="">
        <Zespol
          className="mb-10 mt-5 h-full max-w-full md:hidden"
          alt="Obraz zespołu"
          viewBox="0 0 683 515"
        />
        <div className="bg-white">
          <h1 className="relative pb-6 text-3.5xl font-bold leading-normal md:text-5xl">
            Rozpocznij z nami swoją przygodę w branży IT!
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <p className="pb-12 text-2xl font-bold leading-relaxed text-textGrey">
                Będziesz mógł tworzyć zmieniające świat projekty. Mając takie
                portfolio z pewnością zawojujesz rynek pracy!
              </p>
              <Link href="#formular">
                <div className="just flex h-12 w-[196px] flex-row items-center border border-b-black border-e-white border-s-white border-t-white">
                  <p className="pl-3">Przejdź do formularza</p>
                  <div className="pl-3">
                    <Vector />
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-96 mx-auto flex">
              <Zespol
                className="mx-auto hidden h-auto max-w-full md:block"
                alt="Obraz zespołu"
                layout="responsive"
                viewBox="0 0 683 515"
              />
            </div>
          </div>
          <div className="flex-col items-center pt-15 md:flex-row">
            <div className="flex flex-col">
              <h2 className="pb-12 text-3.5xl font-bold leading-10 md:text-5xl">
                Dlaczego warto?
              </h2>
              <div className="flex flex-row items-center pb-5">
                <Thic className="min-w-[122px]" />
                <p className="pb-6 text-2xl font-bold leading-8 md:text-3.5xl">
                  Postawisz pierwsze kroki w IT
                </p>
              </div>
              <div className="flex flex-row items-center pb-5">
                <Thic className="min-w-[122px]" />
                <p className="pb-6 text-2xl font-bold leading-8 md:text-3.5xl">
                  Wykorzystasz swój potencjał
                </p>
              </div>
              <div className="flex flex-row items-center pb-5">
                <Thic className="min-w-[122px]" />
                <p className="pb-6 pr-12 text-2xl font-bold leading-8 md:text-3.5xl">
                  Będziesz uczestniczył w ambitnych projektach
                </p>
              </div>
              <div className="flex flex-row items-center pb-5">
                <Thic className="min-w-[122px]" />
                <p className="pb-6 pr-12 text-2xl font-bold leading-8 md:text-3.5xl">
                  Zbudujesz swoje CV
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
      </section>
    </SectionWrapper>
    <div className="bg-[#F5F5F5]">
      <SectionWrapper>
        <section>
          <h1 className="pb-4 pt-8 text-center text-4xl font-bold leading-10 md:text-left">
            Nasz proces rekrutacyjny
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row md:gap-15 xl:gap-23">
              <div className="flex flex-col">
                <RecruitCard
                  src={Files}
                  alt="File logo"
                  itemNumber="1"
                  title="Wypełnienie formularza"
                  text="Na początek poprosimy Cię o wypełnienie poniższego formularza.
            Zajmie Ci to maksymalnie 10 minut."
                />
              </div>
              <div className="hidden items-center justify-center md:flex">
                <HandArrow1 viewBox="0 0 67 21" />
              </div>
              <div className="flex flex-col md:pt-10">
                <RecruitCard
                  src={Eye}
                  alt="Eye logo"
                  itemNumber="2"
                  title="Rozpatrzenie zgłoszenia"
                  text="Dzięki niemu lepiej Cię poznamy. Dowiemy się, czy Twoje zdolności
            odpowiadają naszym aktualnym potrzebom."
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 xl:gap-17 ">
              <div className="flex flex-col">
                <RecruitCard
                  src={Dialog}
                  alt="Dialog logo"
                  itemNumber="3"
                  title="Rozmowa kwalifikacyjna"
                  text="Porozmawiamy o Twoim doświadczeniu, oczekiwaniach, dyspozycyjności.
            Odpowiemy także na wszystkie pytania, jakie Ci się nasuną."
                />
              </div>
              <div className="flex flex-row">
                <div className="hidden items-start justify-center md:flex">
                  <HandArrow2 />
                </div>
                <div className="hidden items-center justify-center pt-15 md:flex">
                  <HandArrow3 />
                </div>
              </div>
              <div className="flex flex-col md:pt-11">
                <RecruitCard
                  src={Confetti}
                  alt="Confetti logo"
                  title="Dołączenie do nas"
                  itemNumber="4"
                  text="Jeśli rozmowa wypadnie pomyślnie, zostaniesz jednym z nas. Od teraz
            możemy razem zmieniać świat na lepsze!"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
    <SectionWrapper>
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
  </div>
);

export default Rekrutacja;
