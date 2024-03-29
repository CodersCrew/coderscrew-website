import {
  About,
  Guilds,
  HowWeWork,
  Introduction,
  Opinions,
  Partnerships,
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
  </div>
);

export default Index;
