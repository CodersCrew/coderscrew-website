import Image from 'next/image';
import { ComponentProps } from 'react';

// import Link from 'next/link';
import { Link } from '@/components';

type ImageProps = ComponentProps<typeof Image>;
type HoverProps = {
  title: string;
  link: string;
};

type PressCardProps = ImageProps & HoverProps;

export const PressCard = ({ title, link, alt, ...props }: PressCardProps) => (
  <div className="w-360 h-263 rounded-8 flex flex-col items-center justify-center gap-4 bg-white p-0 pb-8">
    <Image {...props} alt={alt} className="w-full bg-white" />
    <p className="w-112 font-lato leading-120 flex items-center justify-center text-base font-semibold text-black">
      {title}
    </p>
    <Link variant="filled" href={link}>
      Pobierz
    </Link>
  </div>
);
