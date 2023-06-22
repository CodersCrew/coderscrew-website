import { Accordion } from './Accordion';

type AccordionContainerProps = {
  items: string[];
};

export const AccordionContainer = ({ items }: AccordionContainerProps) => (
  <div className="flex flex-col gap-6">
    {items.map((item, index) => (
      <Accordion key={index} markdownFile={item} />
    ))}
  </div>
);
