import PartnersImg from '@/assets/partners.svg';
import { SectionWrapper } from '@/components';

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
      <SectionWrapper>
        <div>Co z nami zyskasz</div>
      </SectionWrapper>
      <SectionWrapper>
        <div>Nasi partnerzy</div>
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
