import Education from '@/assets/education.svg';
import EmployerBranding from '@/assets/employerBranding.svg';
import Events from '@/assets/events.svg';
import PartnersImg from '@/assets/partners.svg';
import LiveChat from '@/assets/partners/liveChatBlack.svg';
import {
  Carousel,
  Link,
  PartnershipProfitCard,
  SectionWrapper
} from '@/components';

const partnersData = [
  {
    id: 0,
    logo: <LiveChat />,
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    href: 'https://www.livechat.com/'
  },
  {
    id: 1,
    logo: <LiveChat />,
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    href: 'https://www.livechat.com/'
  },
  {
    id: 2,
    logo: <LiveChat />,
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    href: 'https://www.livechat.com/'
  },
  {
    id: 3,
    logo: <LiveChat />,
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    href: 'https://www.livechat.com/'
  }
];

const Partners = () => {
  const x = 'b';

  return (
    <>
      <SectionWrapper className="grid items-center justify-center gap-18 md:grid-cols-2">
        <PartnersImg className="row-start-1 mx-auto max-w-[277px] bg-contain md:col-start-2 md:max-w-[502px]" />
        <div className="flex max-w-lg flex-col">
          <h1 className="mb-3 whitespace-pre text-3xl font-bold leading-tight xs:text-[2.2rem] md:text-[1.8rem] lg:text-[2.55rem] xl:text-[2.78rem] 2xl:text-5xl">
            <span className="whitespace-pre-line md:w-[350px]">
              Wspólnie można więcej.{'\n'}
            </span>
            <span className="whitespace-pre-wrap">
              Zostań naszym partnerem!
            </span>
          </h1>
          <p className="mb-8 text-xl leading-normal text-secondary md:text-xl">
            Naszą misją jest umożliwienie rozwoju każdemu, kto chce rozpocząc
            swoją przygodę w IT, razem możemy zapewnić wyjątkowe warunki rozwoju
            i pokazać Twoją markę.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="flex flex-col items-center justify-center gap-12">
        <span className="text-2xl font-bold uppercase tracking-wider text-quaternary">
          Co z nami zyskasz
        </span>
        <div className="flex flex-col gap-12 lg:flex-row xl:gap-20">
          <PartnershipProfitCard
            HexagonIcon={<EmployerBranding />}
            heading="Employer Branding"
            description="Realizacja wspólnych projektów i inicjatyw pozwoli pokazać Twoją
              markę pracodawcy osobom, które wchodzą lub są już obecne na ryneku
              IT."
          />
          <PartnershipProfitCard
            HexagonIcon={<Education />}
            heading="Edukacja"
            description="Wspólnie możemy zorganizować webinar, warsztaty i szkolenia, które pozwolą Ci dotrzeć do osób, dla których zdobywanie wiedzy jest nieodłącznym elementem rozwoju kariery zawodowej.  "
          />
          <PartnershipProfitCard
            HexagonIcon={<Events />}
            heading="Eventy"
            description="Nie masz czasu na organizację własnego kursu, webinaru lub innego wydarzenia rozowjowego? Chętnie w tym pomożemy, na każdym etapie."
          />
        </div>
        <Link
          variant="outlined"
          href="#zapraszamy-do-kontaktu"
          className="m-auto mt-6"
        >
          Zostań partnerem
        </Link>
      </SectionWrapper>
      <SectionWrapper>
        <Carousel slides={partnersData} variant="partners" />
      </SectionWrapper>
      <SectionWrapper>
        <div>Partnerzy medialni</div>
      </SectionWrapper>
      <SectionWrapper>
        <div>Mówią o nas</div>
      </SectionWrapper>
      <SectionWrapper>
        <div>Zapraszamy do kontaktu</div>
      </SectionWrapper>
    </>
  );
};

export default Partners;
