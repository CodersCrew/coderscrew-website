import { ReactNode } from 'react';

import { Link } from '@/components';

type PartnersCardProps = {
  content: string;
  logo: ReactNode;
  href: string;
};

export const PartnersCard = ({ content, logo, href }: PartnersCardProps) => (
  <div className="flex h-[436px] w-[360px] flex-col items-center justify-start rounded-lg bg-white p-6 shadow-card">
    {logo}
    <div className="mt-6 text-center text-base leading-normal">{content}</div>
    <div className="mt-auto text-center text-base leading-normal text-secondary">
      <Link href={href} variant="outlined">
        Odwiedź stronę partnera
      </Link>
    </div>
  </div>
);
