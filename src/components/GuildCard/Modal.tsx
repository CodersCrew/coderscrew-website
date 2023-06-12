import { ReactNode, TouchEvent, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import CloseModal from '@/assets/close-modal.svg';
import { Hexagon } from '@/components/Hexagon';
import { Pagination } from '@/components/Pagination';

type ModalProps = {
  Icon: ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  hexagonsColor: string;
};

const PageSize = 345;

export const Modal = ({
  Icon,
  title,
  description,
  isOpen,
  setIsOpen,
  hexagonsColor
}: ModalProps) => {
  const [dataToPage, setDataToPage] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [touchPosition, setTouchPosition] = useState<null | number>(null);
  const totalPageCount = useMemo(
    () => Math.ceil(description.length / PageSize),
    [description]
  );

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0]?.clientX || null;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;

    const currentTouch = e.touches[0]?.clientX || 0;

    const diff = touchDown - currentTouch;

    if (diff > 5 && currentPage !== totalPageCount) {
      setCurrentPage(prev => prev + 1);
    }
    if (diff < -5 && currentPage !== 1) {
      setCurrentPage(prev => prev - 1);
    }

    setTouchPosition(null);
  };

  const handleExit = () => {
    setIsOpen(!isOpen);
    setCurrentPage(1);
  };

  const handlePreviousPage = () =>
    currentPage > 1 && setCurrentPage(v => v - 1);
  const handleNextPage = () =>
    currentPage < totalPageCount && setCurrentPage(v => v + 1);

  const currentDataToParagraphs =
    dataToPage[currentPage - 1]
      ?.split('\n')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>) || [];

  useEffect(() => {
    const data = [];
    for (let i = 0; i < totalPageCount; i += 1) {
      const currentPageFirstIndex = i * PageSize;
      const currentPageLastIndex = currentPageFirstIndex + PageSize;
      const sliceOfText = description.slice(
        currentPageFirstIndex,
        currentPageLastIndex
      );
      data.push(sliceOfText);
    }
    data.map(set => set.trim());
    setDataToPage(data);
  }, [description, totalPageCount]);

  return (
    <div
      className={twMerge(
        'left-0 top-0 z-10 flex h-0 w-0 flex-col items-center justify-center bg-primary/80 text-primary backdrop-blur-sm',
        isOpen && 'fixed h-full w-full'
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onClick={handleExit}
    >
      <div
        className={twMerge(
          'h-[486px] w-[359px] overflow-hidden rounded-lg bg-white px-10 py-14 opacity-0 transition-opacity duration-200',
          isOpen ? 'fixed opacity-100' : 'duration-[0ms]'
        )}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-black"
          onClick={handleExit}
        >
          <CloseModal />
        </button>
        <div className="flex h-full w-full select-none flex-col justify-between gap-5">
          <header className="flex">
            <div className="mr-5 rotate-0 scale-125">{Icon}</div>
            <span className="text-2xl font-semibold">{title}</span>
          </header>
          <section className="flex grow flex-col gap-4 text-secondary">
            {currentDataToParagraphs}
          </section>
          <Pagination
            currentPage={currentPage}
            totalPageCount={totalPageCount}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            className="self-center"
          />
        </div>
        <Hexagon
          className={twMerge(
            'absolute -left-7 -top-5 h-[66px] w-[69px] opacity-20',
            hexagonsColor
          )}
        />
        <Hexagon
          className={twMerge(
            'absolute -bottom-8 -right-8 h-[87px] w-[88px] opacity-20',
            hexagonsColor
          )}
        />
      </div>
    </div>
  );
};
