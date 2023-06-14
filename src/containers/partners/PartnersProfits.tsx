import Education from '@/assets/education.svg';
import EmployerBranding from '@/assets/employerBranding.svg';
import Events from '@/assets/events.svg';
import { Link, PartnershipProfitCard, SectionWrapper } from '@/components';

const PartnersProfits = () => (
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
);

export default PartnersProfits;
