import React from 'react';
import { twMerge } from 'tailwind-merge';

import DarkDot from '@/assets/dark-dot.svg';
import LightDot from '@/assets/light-dot.svg';

type PaginationProps = {
  totalPageCount: number;
  currentPage: number;
  className?: string;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

export const Pagination = ({
  totalPageCount,
  currentPage,
  className,
  handleNextPage,
  handlePreviousPage
}: PaginationProps) => {
  const dots = [];

  for (let i = 0; i < totalPageCount; i += 1) {
    dots.push(
      <li key={i}>{currentPage === i + 1 ? <DarkDot /> : <LightDot />}</li>
    );
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPageCount;

  return (
    <ul className={twMerge('flex items-center gap-2', className)}>
      <button
        className={twMerge(
          'mr-2 hidden select-none text-xl font-bold leading-3 lg:block',
          isFirstPage && 'pointer-events-none opacity-25'
        )}
        onClick={handlePreviousPage}
      >
        {'<'}
      </button>
      {dots}
      <button
        className={twMerge(
          'ml-2 hidden select-none text-xl font-bold leading-3 lg:block',
          isLastPage && 'pointer-events-none opacity-25'
        )}
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </ul>
  );
};
