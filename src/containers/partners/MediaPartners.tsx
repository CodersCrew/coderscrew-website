import { PartnersLogos, SectionWrapper } from '@/components';

const MediaPartners = () => (
  <SectionWrapper className="flex flex-col items-center gap-12">
    <div className="text-2xl font-bold uppercase text-quaternary">
      Partnerzy medialni
    </div>
    <PartnersLogos />
  </SectionWrapper>
);

export default MediaPartners;
