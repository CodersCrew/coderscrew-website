import { About, Footer, Guilds, Header, HowWeWork, Introduction, Opinions, Partnerships, Projects } from '@/containers';

const Index = () => (
  <div className="bg-additional-darkWhite">
    <Header />
    <Introduction />
    <About />

    <Guilds />
    <Projects />
    <Opinions />
    <HowWeWork />
    <Partnerships />
    <Footer />
  </div>
);

export default Index;
