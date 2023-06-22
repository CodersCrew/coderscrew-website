import { Carousel, Hexagon, Link, SectionWrapper } from '@/components';
import { opinions } from '@/containers/home/Opinions';

const TheyTalkAboutUs = () => (
  <SectionWrapper className="flex flex-col items-center justify-center gap-y-12 overflow-hidden">
    <div className="flex flex-col gap-y-4">
      <span className="flex justify-center text-2xl font-bold uppercase text-quaternary">
        Mówią o nas
      </span>
      <span className="text-secondary">
        Zobacz, co mówią o nas nasi partnerzy
      </span>
    </div>
    <div className="relative">
      <Hexagon className="absolute -left-9 -top-8 -z-10 h-19 w-20 bg-quaternary/30 md:-left-2 md:-top-15 md:h-31 md:w-32 md:bg-quaternary/20" />
      <Carousel
        slides={opinions}
        variant="opinions"
        arrowsColor="text-dotIndicator/40"
      />
      <Hexagon className="absolute -right-17 bottom-16 -z-20 h-22 w-23 -rotate-12 bg-quaternary/20 md:bottom-4 md:right-0 md:rotate-90" />
      <Hexagon className="absolute -right-3 bottom-17 -z-10 hidden h-9 w-9 bg-quaternary/20 md:block " />
    </div>
    <Link className="mt-6" href="#zapraszamy" variant="outlined">
      Zostań partnerem
    </Link>
  </SectionWrapper>
);

export default TheyTalkAboutUs;
