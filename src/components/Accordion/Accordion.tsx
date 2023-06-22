import matter from 'gray-matter';
import { ReactEventHandler, SyntheticEvent, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

import Arrow from '@/assets/arrowUp.svg';

export const Accordion = ({ markdownFile }: { markdownFile: string }) => {
  const [isActive, setIsActive] = useState(false);
  const markdownFileObject = matter(markdownFile);

  const handleOnAccordionClick = (e: SyntheticEvent) => {
    setIsActive(prev => !prev);
    !isActive && e.currentTarget?.scrollIntoView({ block: 'center' });
  };

  return (
    <div className="w-[358px] select-none xl:w-[552px]">
      <div
        className={twMerge(
          'flex cursor-pointer items-center justify-between rounded-[4px] border-2 border-transparent bg-white py-4 pl-6 pr-8 drop-shadow-[8px_8px_33px_rgba(0,0,0,0.07)] transition-all duration-[100ms]',
          isActive && 'border-quaternary'
        )}
        onClick={handleOnAccordionClick}
      >
        <div className="text-xl text-primary">
          {markdownFileObject.data.title}
        </div>
        <div>
          <Arrow className={isActive ? 'rotate-180' : ''} />
        </div>
      </div>
      <div
        className={twMerge(
          'relative h-0 overflow-hidden bg-white leading-relaxed before:absolute before:inset-0 before:-z-10 before:p-0 before:shadow-[8px_8px_33px_rgba(0,0,0,0.07)]',
          isActive && 'h-auto p-6'
        )}
      >
        <ReactMarkdown className="faq">
          {markdownFileObject.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
