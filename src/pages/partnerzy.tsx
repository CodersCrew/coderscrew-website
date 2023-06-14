import ContactUs from '@/containers/partners/ContactUs';
import MediaPartners from '@/containers/partners/MediaPartners';
import OurPartners from '@/containers/partners/OurPartners';
import PartnersIntroduction from '@/containers/partners/PartnersIntroduction';
import PartnersProfits from '@/containers/partners/PartnersProfits';
import TheyTalkAboutUs from '@/containers/partners/TheyTalkAboutUs';

const Partners = () => (
  <div className="bg-additional-darkWhite">
    <PartnersIntroduction />
    <PartnersProfits />
    <OurPartners />
    <MediaPartners />
    <TheyTalkAboutUs />
    <ContactUs />
  </div>
);

export default Partners;
