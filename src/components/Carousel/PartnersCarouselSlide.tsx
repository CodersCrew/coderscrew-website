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
  <div className="flex h-[388px] w-[290px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-card md:h-[436px] md:w-[360px]">
    {logo}
    <div className="mt-6 text-center text-base leading-normal">{content}</div>
    <div className="mt-auto text-center text-base leading-normal text-secondary">
      <Link href={href} variant="outlined">
        Odwiedź stronę partnera
      </Link>
    </div>
  </div>
);
