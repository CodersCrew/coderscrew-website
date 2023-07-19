import CzegoSieSpodziewac from '@/assets/markdown/faq/czego-sie-spodziewac.md';
import JakDolaczyc from '@/assets/markdown/faq/jak-dolaczyc.md';
import JakieSaKorzysci from '@/assets/markdown/faq/jakie-korzysci.md';
import JakieSaObowiazki from '@/assets/markdown/faq/jakie-sa-obowiazki.md';
import KimJestescie from '@/assets/markdown/faq/kim-jestescie.md';
import KtoMozeDolaczyc from '@/assets/markdown/faq/kto-moze-dolaczyc.md';
import WJakichObszarach from '@/assets/markdown/faq/w-jakich-obszarach.md';
import { AccordionContainer, SectionWrapper } from '@/components';

const itemsMarkdownCol1 = [
  KimJestescie,
  KtoMozeDolaczyc,
  JakDolaczyc,
  WJakichObszarach
];

const itemsMarkdownCol2 = [
  JakieSaKorzysci,
  CzegoSieSpodziewac,
  JakieSaObowiazki
];

const FAQ = () => (
  <SectionWrapper className="flex flex-col items-center bg-additional-darkWhite">
    <header className="mb-12 flex flex-col items-center gap-4 text-2xl">
      <span className="font-bold uppercase text-quaternary">FAQ</span>
      <p className="w-[309px] text-center font-semibold text-primary">
        Znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
    </header>
    <div className="flex flex-col gap-6 xl:flex-row xl:gap-10">
      <AccordionContainer items={itemsMarkdownCol1} />
      <AccordionContainer items={itemsMarkdownCol2} />
    </div>
  </SectionWrapper>
);

export default FAQ;
