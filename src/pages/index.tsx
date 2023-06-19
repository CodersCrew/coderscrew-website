import {
  About,
  Guilds,
  HowWeWork,
  Introduction,
  Opinions,
  Partnerships,
  PressPack,
  Projects
} from '@/containers';

const Index = () => (
  <div className="bg-additional-darkWhite">
    <Introduction />
    <About />
    <Guilds />
    <Projects />
    <Opinions />
    <HowWeWork />
    <Partnerships />
    <PressPack />
  </div>
);

export default Index;
