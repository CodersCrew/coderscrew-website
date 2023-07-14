import { SectionWrapper } from '@/components';

const ContactUs = () => (
  <SectionWrapper className="flex flex-col items-center justify-center gap-y-6 text-primary md:flex-row md:justify-around lg:justify-center">
    <div className="flex max-w-md flex-col justify-center gap-y-6 text-center md:gap-y-8 md:text-left">
      <span id="zapraszamy" className="text-2xl font-semibold md:text-[32px]">
        Zapraszamy do kontaktu!
      </span>
      <span>
        Chętnie porozmawiamy o możliwości wspólpracy i zrealizowaniu wspólnego
        projektu!
      </span>
    </div>
    <div className="lg flex flex-col gap-y-1 md:self-end lg:ml-19">
      <span>Napisz do nas! Czekamy</span>
      <span className="font-bold">zarzad@coderscrew.pl</span>
    </div>
  </SectionWrapper>
);

export default ContactUs;
