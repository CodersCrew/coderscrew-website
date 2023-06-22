import LiveChat from '@/assets/partners/black/liveChatBlack.svg';
import { Carousel, PartnersCard, SectionWrapper } from '@/components';

const partnersData = [
  {
    id: 0,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  },
  {
    id: 1,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  },
  {
    id: 2,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  },
  {
    id: 3,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  },
  {
    id: 4,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  },
  {
    id: 5,
    logo: <LiveChat />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: 'https://www.livechat.com/'
  }
];

const OurPartners = () => (
  <SectionWrapper className="to-95%% flex max-w-none flex-col items-center justify-center bg-gradient-to-b from-primary/95 from-45% to-quaternary to-90%">
    <span className="mt-10 text-2xl font-bold uppercase tracking-wider text-quaternary">
      Nasi Partnerzy
    </span>
    <span className="mb-12 mt-4 h-23 w-[342px] text-center text-xl leading-8 text-white opacity-90 lg:h-[60px] lg:w-[656px]">
      Współpraca z tymi firmami pozwala nam w codziennym rozwoju i tworzeniu
      społeczności
    </span>
    <div className="lg:hidden">
      <Carousel slides={partnersData} variant="partners" />
    </div>
    <div className="hidden flex-wrap justify-around gap-x-6 gap-y-20 lg:flex 2xl:gap-x-24">
      {partnersData.map((partner, index) => (
        <PartnersCard
          key={index}
          content={partner.content}
          logo={partner.logo}
          href={partner.href}
        />
      ))}
    </div>
  </SectionWrapper>
);

export default OurPartners;
