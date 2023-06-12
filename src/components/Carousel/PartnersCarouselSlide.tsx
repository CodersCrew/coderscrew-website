import { ReactNode } from 'react';

import { Link } from '@/components';

type PartnersCarouselSlideProps = {
  content: string;
  logo: ReactNode;
  href: string;
};

export const PartnersCarouselSlide = ({
  content,
  logo,
  href
}: PartnersCarouselSlideProps) => (
  <div className="flex h-[382px] w-[290px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-card md:h-[288px] md:w-[510px]">
    {logo}
    <div className="text-center text-base font-semibold leading-normal">
      {content}
    </div>
    <div className="text-center text-base leading-normal text-secondary">
      <Link href={href} variant="outlined">
        Odwiedź stronę partnera
      </Link>
    </div>
  </div>
);
