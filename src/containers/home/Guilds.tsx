import HumanResources from '@/assets/human-resources.svg';
import OnlineMarketing from '@/assets/online-marketing.svg';
import ProjectManagement from '@/assets/project-management.svg';
import UXUIDesign from '@/assets/ux-ui-design.svg';
import WebDev from '@/assets/web-development.svg';
import { GuildCard, Link, SectionWrapper, Separator } from '@/components';

export const Guilds = () => (
  <SectionWrapper
    className=" max-w-screen-3xl relative mx-0 flex flex-col items-center justify-center gap-8 overflow-hidden bg-primary text-lightGrey lg:grid lg:grid-cols-[3fr_2fr] lg:grid-rows-[180px_40px_180px_40px_180px_40px_180px_40px_180px] lg:gap-3"
    id="guilds"
  >
    <section className="mb-8 flex max-w-[305px] flex-col justify-center gap-3 pt-10 text-left lg:col-start-1 lg:row-start-3 lg:ml-9 lg:max-w-[470px] lg:self-start lg:pt-0">
      <header className="text-3xl font-bold leading-tight opacity-90 lg:text-5xl lg:leading-[58px]">
        Wybierz ścieżkę rozwoju dla siebie
      </header>
      <p className="leading-normal lg:text-[32px] lg:leading-[38px]">
        Czekają na Ciebie interesujące wyzwania i ciekawe projekty, podczas
        których przełożysz teorię na praktykę.
      </p>
    </section>
    <GuildCard
      Icon={<WebDev />}
      title="Web Development"
      shortDescription="Twórz unikalne strony i aplikacje mobilne"
      longDescription={
        'Nasz najstarszy, największy i sztandarowy dział. W jego ramach będziesz przygotowywać strony i aplikacje webowe.\nPonadto zyskasz możliwość uczenia innych swojego fachu poprzez prowadzenie warsztatów i prelekcji. Masz do wyboru ścieżkę front-endu, to jest projektowania aspektu wizualnego. Drugą opcją jest back-end, czyli to, czego nie widać.   Zarządzaj projektami używając nowoczesnych metod.\nZgłębiaj techniki digital marketingu.\nTwórz projekty graficzne w oparciu o potrzeby użytkownika.\n Zarządzaj naszymi zasobami ludzkimi'
      }
      className="lg:col-start-2 lg:row-start-1"
      modalHexagonsColor="bg-webDev"
    />
    <Separator className="col-start-2 row-span-1 row-start-2" />
    <GuildCard
      Icon={<ProjectManagement />}
      title="Project Management"
      shortDescription="Zarządzaj projektami używając nowoczesnych metod"
      longDescription="Zarządzaj projektami używając nowoczesnych metod"
      className="lg:col-start-2 lg:row-start-3"
      modalHexagonsColor="bg-pm"
    />
    <Separator className="lg:col-start-2 lg:row-start-4" />
    <GuildCard
      Icon={<OnlineMarketing />}
      title="Online Marketing"
      shortDescription="Zgłębiaj techniki digital marketingu"
      longDescription="Zgłębiaj techniki digital marketingu"
      className="lg:col-start-2 lg:row-start-5"
      modalHexagonsColor="bg-marketing"
    />
    <Separator className="lg:col-start-2 lg:row-start-6" />
    <GuildCard
      Icon={<UXUIDesign />}
      title="UX/UI Design"
      shortDescription="Twórz projekty graficzne w oparciu o potrzeby użytkownika"
      longDescription="Twórz projekty graficzne w oparciu o potrzeby użytkownika"
      className="lg:col-start-2 lg:row-start-7"
      modalHexagonsColor="bg-ux"
    />
    <Separator className="lg:row-start-8 lg:col-start-2" />
    <GuildCard
      Icon={<HumanResources />}
      title="Human Resources"
      shortDescription="Zarządzaj naszymi zasobami ludzkimi"
      longDescription="Zarządzaj naszymi zasobami ludzkimi"
      className="lg:row-start-9 col-start-2"
      modalHexagonsColor="bg-hr"
    />
    <div className="mb-10 mt-10 h-11 lg:col-start-1 lg:row-start-5 lg:my-0 lg:ml-9 lg:mt-10 lg:self-center">
      <Link href="/rekrutacja" variant="filled" className="w-[175px]">
        Dołącz do nas
      </Link>
    </div>
  </SectionWrapper>
);
