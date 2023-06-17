import { AccordionItem } from './AccordionItem';

type AccordionProps = {
  items: string[];
};

export const Accordion = ({ items }: AccordionProps) => (
  <div className="flex flex-col gap-6">
    {items.map((item, index) => (
      <AccordionItem key={index} markdownFile={item} />
    ))}
  </div>
);
